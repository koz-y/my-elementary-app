const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const config = require('../config')
const userModel = require('../model/user')

router.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!email) {
    // Invalid error
    return res.status(422).send({
      errors: [{ title: 'User error', detail: 'Please fill email' }],
    })
  }
  if (!password) {
    // Invalid error
    return res.status(422).send({
      errors: [{ title: 'User error', detail: 'Please fill password' }],
    })
  }
  userModel.findOne({ email }, (err, foundUser) => {
    if (err) {
      // Error message
      return res.status(422).send({
        errors: [{ title: 'User error', detail: 'Something went wrong' }],
      })
    }
    if (!foundUser) {
      // Invalid error
      return res.status(422).send({
        errors: [{ title: 'User error', detail: 'User not found' }],
      })
    }
    if (!foundUser.hasSamePassword(password)) {
      // Invalid error
      return res.status(422).send({
        errors: [{ title: 'User error', detail: 'Password wrong' }],
      })
    }

    // Login OK
    // const token = 'I am JWT'
    const token = jwt.sign(
      {
        userId: foundUser.id,
        username: foundUser.username,
      },
      config.SECRET,
      { expiresIn: '1h' }
    )

    return res.json(token)
  })
})

router.post('/register', (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword

  if (!username) {
    // Invalid error
    return res.status(422).send({
      errors: [{ title: 'User error', detail: 'Please fill username' }],
    })
  }
  if (!email) {
    // Invalid error
    return res.status(422).send({
      errors: [{ title: 'User error', detail: 'Please fill email' }],
    })
  }
  if (!password) {
    // Invalid error
    return res.status(422).send({
      errors: [{ title: 'User error', detail: 'Please fill password' }],
    })
  }
  if (password !== confirmPassword) {
    // Invalid error
    return res.status(422).send({
      errors: [{ title: 'User error', detail: 'Please check password' }],
    })
  }

  userModel.findOne({ email }, (err, foundUser) => {
    if (err) {
      // Error message
      return res.status(422).send({
        errors: [{ title: 'User error', detail: 'Something went wrong' }],
      })
    }
    if (foundUser) {
      // Invalid error
      return res.status(422).send({
        errors: [{ title: 'User error', detail: 'User already exist' }],
      })
    }
    const user = new userModel({ username, email, password })
    user.save((err) => {
      if (err) {
        // Error message
        return res.status(422).send({
          errors: [{ title: 'User error', detail: 'Something went wrong' }],
        })
      }
      return res.json({ registed: true })
    })
  })
})

module.exports = router
