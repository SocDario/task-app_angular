import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { TaskAppRoutes } from '../enums/TaskAppRoutes';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(): Promise<boolean> | boolean {
    if (this.authService.checkUserAuthState()) {
      return this.router.navigate([TaskAppRoutes.ListPage]);
    }

    return true;
  }
}
