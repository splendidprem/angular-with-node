import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('user');
  }

  authenticate(loginInfo: any) {
    sessionStorage.setItem('user', JSON.stringify(loginInfo));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  logout() {
    sessionStorage.removeItem('user');
  }

}
