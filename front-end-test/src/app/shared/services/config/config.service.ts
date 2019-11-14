import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config;
  constructor() {
      this.config = {
        BASEURL: "https://swapi.co/api/",
        resources: {
          PEOPLE:'people',
        }
      }
  }
  getConfig() {
     return this.config;
  }

  getUrlBase() {
    return this.config.BASEURL;
  }

  getResources() {
    return this.config.resources;
  }


}


