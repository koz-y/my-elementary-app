import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  postUsersUrl = '/api/v1/users/'

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(this.postUsersUrl + 'register', userData)
  }

  login(loginData: any): Observable<any> {
    return this.http.post(this.postUsersUrl + 'login', loginData)
  }
}
