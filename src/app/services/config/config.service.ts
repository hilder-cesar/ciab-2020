import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  loadConfig(): Promise<any> {
    return this.httpClient.get('../config.json')
      .toPromise()
      .then((data) => this.config = data);
  }

  getConfig(): any {
    return this.config;
  }

}
