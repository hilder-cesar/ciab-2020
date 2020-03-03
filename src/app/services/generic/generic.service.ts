import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  get(route: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${route}`);
  }

  post(route: string, value: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${route}`, value);
  }

}
