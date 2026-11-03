import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable()
export class EmpleadosService {
  private readonly url = environment.urlApiEmpleados;

  constructor(private readonly _http: HttpClient) {}

  async getPerfilEmpleado(token: string): Promise<Empleado> {
    const url = `${this.url}api/empleados/perfilempleado`;
    return firstValueFrom(this._http.get<Empleado>(url, { headers: this.authHeaders(token) }));
  }

  async getSubordinados(): Promise<Empleado[]> {
    const url = `${this.url}api/empleados/subordinados`;
    return firstValueFrom(this._http.get<Empleado[]>(url));
  }

  private authHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
}
