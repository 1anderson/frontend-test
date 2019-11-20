import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { CrudService } from 'src/app/shared/services/crud/crud.service';
import { ObservableService } from 'src/app/shared/services/observable.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  private character = {};
  constructor(private crudService: CrudService, private observableService: ObservableService) { }

  ngOnInit() {
    this.character = history.state;
    let Observableslist$ = [];
    let speciesList$ = [];
    forkJoin( this.observableService.getResouce( this.character['films']),
      this.observableService.getResouce( this.character['species']),
      this.observableService.getResouce( this.character['starships']))
        .subscribe(([ films, species, starships ]) => {
          this.character['films'] = films;
          this.character['species'] = species;
          this.character['starships'] = starships;
        })
  }
}


