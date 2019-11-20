import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CrudService } from './crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private crudService: CrudService ) {}

  getResouce(urlList) {
    let Observableslist$ = [];
    for (let url of urlList) {
      Observableslist$.push(this.crudService.get(url.split("/api/")[1]));
    }
    return forkJoin(Observableslist$);
  }
}
