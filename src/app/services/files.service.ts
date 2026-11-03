import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { File } from '../models/file';

@Injectable()
export class FilesService {
  url = environment.utlApiPostImagenes;

  constructor(private _http: HttpClient) {}

  async postFile(file: File): Promise<any> {
    const request = 'api/TestingFiles';
    let url = this.url + request;
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return firstValueFrom(this._http.post(url, JSON.stringify(file), { headers: header }));
  }
}
