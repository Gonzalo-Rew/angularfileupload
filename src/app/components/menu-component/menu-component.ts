import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ) {}

  logOut(): void {
    this._authService.clearToken();
    void this._router.navigate(['/login']);
  }
}
