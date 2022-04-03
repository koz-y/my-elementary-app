import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import { AuthService } from '../service/auth.service'

import {
  faUmbrella,
  faMapSigns,
  faUserSecret,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  })

  data: Date = new Date()
  errors: any = []

  faUmbrella = faUmbrella
  faMapSigns = faMapSigns
  faUserSecret = faUserSecret
  faHeart = faHeart
  faFacebook = faFacebook
  faFacebookF = faFacebookF
  faGoogle = faGoogle
  faTwitter = faTwitter

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0]
    body.classList.add('full-screen')
    body.classList.add('register-page')
    var navbar = document.getElementsByTagName('nav')[0]
    navbar.classList.add('navbar-transparent')
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0]
    body.classList.remove('full-screen')
    body.classList.remove('register-page')
    var navbar = document.getElementsByTagName('nav')[0]
    navbar.classList.remove('navbar-transparent')
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe({
      next: result => {
        console.log({ next: result })
        this.router.navigate(['/login'])
      },
      error: (err: HttpErrorResponse) => {
        console.error({ error: err })
        this.errors = err.error.errors
      },
      complete: () => {
        console.log('conplete')
      },
    })

    // console.log(this.registerForm.value)
  }
}
