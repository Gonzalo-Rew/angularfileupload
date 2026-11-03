import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angularfileupload');
  protected readonly showMenu = signal(false);

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
  ) {
    this.updateMenu(this._router.url);
    this._router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateMenu(event.urlAfterRedirects));
  }

  private updateMenu(url: string): void {
    this.showMenu.set(url !== '/login' && this._authService.hasValidToken());
  }
}
