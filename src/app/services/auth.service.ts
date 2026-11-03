import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';
import { HttpContext } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const AUTH_TOKEN_KEY = 'authToken';

export interface AuthResponse {
  response: string;
}

@Injectable()
export class AuthService {
  private readonly url = environment.urlApiEmpleados;
  private readonly loginHttp: HttpClient;

  constructor(
    private readonly _http: HttpClient,
    httpBackend: HttpBackend,
  ) {
    this.loginHttp = new HttpClient(httpBackend);
  }

  hasValidToken(): boolean {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    return !!token?.trim() && token !== '[object Object]';
  }

  getTokenValue(): string | null {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  }

  saveToken(token: string): void {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  clearToken(): void {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
  }

  async getToken(login: Login): Promise<AuthResponse> {
    const url = `${this.url}auth/login`;
    const body = { username: login.userName, password: login.password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this.loginHttp.post<AuthResponse>(url, body, { headers, context: new HttpContext().set(SKIP_TOKEN, true) }));
  }
}
