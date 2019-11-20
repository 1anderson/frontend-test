import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private ulrBase;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.ulrBase = this.configService.getUrlBase();
  }

  get<T>( entity, queryParams = {} )  {
    let params = new HttpParams();
      for (let [ key ] of Object.entries(queryParams)) {
        params = params.set(key, queryParams[key]);
      }
    return this.http.get<T[]>(`${this.ulrBase}${entity}`,{ params });
  }
}

