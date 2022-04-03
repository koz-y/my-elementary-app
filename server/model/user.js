const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const { hash } = require('bcrypt')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: [30, 'ユーザー名は最大30文字までです'],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    max: [30, 'メールアドレスは最大30文字までです'],
  },
  password: {
    type: String,
    required: true,
    max: [30, 'パスワードは最大30文字までです'],
    min: [6, 'パスワードは6文字以上です'],
  },
})

UserSchema.methods.hasSamePassword = function (inputPassword) {
  const user = this
  return bcrypt.compareSync(inputPassword, user.password)
}

UserSchema.pre('save', function (next) {
  const user = this
  const saltRounds = 10
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      // Store hash in your password DB.
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('userModel', UserSchema)
