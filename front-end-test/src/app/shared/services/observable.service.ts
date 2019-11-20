import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CrudService } from './crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private crudService: CrudService ) {}

  getResouce(urlList) {
    let Observableslist$ = [];
    if (urlList.length === 0) return of(null);
    for (let url of urlList) {
      Observableslist$.push(this.crudService.get(url.split("/api/")[1]));
    }
    return forkJoin(Observableslist$);
  }
}
