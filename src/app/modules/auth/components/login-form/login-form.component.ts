import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCredentials } from 'src/app/modules/auth/models/UserCredentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() formSubmited = new EventEmitter<UserCredentials>();
  passwordShown = false;
  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    loginPersistence: [false],
  });

  constructor(private readonly fb: FormBuilder) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get loginPersistence() {
    return this.loginForm.get('loginPersistence');
  }

  handleFormSubmit() {
    if (this.email?.value && this.password?.value && this.loginPersistence) {
      this.formSubmited.emit({
        email: this.email.value,
        password: this.password.value,
        isLoginPersistenceEnabled: this.loginPersistence.value,
      });
    }
  }
}
