import { Injectable } from '@angular/core';
import { UserCredentials } from '../models/UserCredentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStorageKey = 'isLoggedIn';
  email = 'test@gmail.com';
  password = 'password';

  handleSignIn({
    email,
    password,
    isLoginPersistenceEnabled,
  }: UserCredentials) {
    if (email !== this.email || password !== this.password) {
      return false;
    }

    if (isLoginPersistenceEnabled) {
      localStorage.setItem(this.authStorageKey, JSON.stringify(true));
    } else {
      sessionStorage.setItem(this.authStorageKey, JSON.stringify(true));
    }

    return true;
  }

  handleSignOut() {
    localStorage.removeItem(this.authStorageKey);
    sessionStorage.removeItem(this.authStorageKey);
  }

  checkUserAuthState() {
    const localStorageState = localStorage.getItem(this.authStorageKey);
    const sessionStorageState = sessionStorage.getItem(this.authStorageKey);

    if (localStorageState !== null || sessionStorageState !== null) {
      return true;
    }

    return false;
  }
}
