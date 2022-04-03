import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule, Routes } from '@angular/router'
import { AuthService } from './service/auth.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [AuthService],
})
export class AuthModule {}
