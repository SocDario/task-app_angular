import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskAppRoutes } from 'src/app/modules/shared/enums/TaskAppRoutes';
import { UserCredentials } from '../../models/UserCredentials';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) {}

  handleSignIn(userCredentials: UserCredentials) {
    if (!this.authService.handleSignIn(userCredentials)) {
      this.snackBar.open('Invalid email or password', 'cancel', {
        duration: 5000,
      });
      return;
    }

    this.router.navigate([TaskAppRoutes.ListPage]);
  }
}
