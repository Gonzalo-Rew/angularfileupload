import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Equipo } from '../models/equipo';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class EquiposService {
  constructor(private _http: HttpClient) {}

  async getEquipos(): Promise<Equipo[]> {
    const request = 'api/Equipos';
    let url = environment.urlApiEquipos + request;
    return firstValueFrom(
      this._http.get<Equipo[]>(url, { context: new HttpContext().set(SKIP_TOKEN, true) }),
    );
  }
}
