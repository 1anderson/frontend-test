import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config;
  constructor() {
      this.config = {
        BASEURL: "http://localhost:3000",
        ENDPOINT: {
          character:'post',
        }
      }
  }
  getConfig() {
     return this.config;
  }

  getUrlBase() {
    return this.config.BASEURL;
  }


}


