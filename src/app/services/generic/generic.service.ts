import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private baseUrl;

  constructor(
    configService: ConfigService,
    private httpClient: HttpClient
  ) {
    this.baseUrl = environment.production ? configService.getConfig().baseUrl : configService.getConfig().baseUrlDEV;
    console.log(this.baseUrl);
  }

  get(route: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${route}`);
  }

  post(route: string, value: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${route}`, value);
  }

}
