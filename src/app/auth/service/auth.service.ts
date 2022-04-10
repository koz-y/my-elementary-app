import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { JwtHelperService } from '@auth0/angular-jwt'
import * as moment from 'moment'
import { Router } from '@angular/router'

const jwt = new JwtHelperService()

class DecodedToken {
  userId = ''
  username = ''
  exp = 0
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  postUsersUrl = '/api/v1/users/'
  redirectUrl: string | null = '/'
  private decodedToken

  constructor(private http: HttpClient, private router: Router) {
    this.decodedToken =
      JSON.parse(localStorage.getItem('app-meta')!) || new DecodedToken()
  }

  getToken() {
    return localStorage.getItem('app-auth')
  }

  isAuthenticated(): boolean {
    return moment().isBefore(moment.unix(this.decodedToken.exp))
  }

  register(userData: any): Observable<any> {
    return this.http.post(this.postUsersUrl + 'register', userData)
  }

  login(loginData: any): Observable<any> {
    return this.http.post<string>(this.postUsersUrl + 'login', loginData).pipe(
      map((token: string) => {
        this.decodedToken = jwt.decodeToken(token)
        localStorage.setItem('app-auth', token)
        localStorage.setItem('app-meta', JSON.stringify(this.decodedToken))
        this.router.navigate([this.redirectUrl])

        return token
      })
    )
  }

  logout() {
    localStorage.removeItem('app-auth')
    localStorage.removeItem('app-meta')
    this.decodedToken = new DecodedToken()
    this.router.navigate(['/'])
  }
}
