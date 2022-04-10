import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '../service/auth.service'

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  data: Date = new Date()
  errors: any = []

  faHeart = faHeart

  constructor(
    private formBuilder: FormBuilder,
    private authServide: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0]
    body.classList.add('full-screen')
    body.classList.add('login')
    var navbar = document.getElementsByTagName('nav')[0]
    navbar.classList.add('navbar-transparent')
    if (navbar.classList.contains('nav-up')) {
      navbar.classList.remove('nav-up')
    }
  }

  login() {
    this.authServide.login(this.loginForm.value).subscribe({
      next: token => {
        // console.log(token)
        // this.router.navigate(['/'])
      },
      error: (err: HttpErrorResponse) => {
        console.error({ error: err })
        this.errors = err.error.errors
      },
      complete: () => {
        console.log('complete')
      },
    })

    // console.log(this.loginForm.value)
  }
}
