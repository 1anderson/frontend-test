import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from 'src/app/shared/services/crud/crud.service';
import { ObservableService } from 'src/app/shared/services/observable.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  private character = {};
  constructor(private crudService: CrudService, private observableService: ObservableService, private route: ActivatedRoute,
    private toastService: ToastService) { }

  ngOnInit() {
    if( history.state['url'] === undefined ) {
      this.crudService.get(localStorage.getItem('characterUrl').split("https://swapi.co/api/")[1])
        .subscribe(character => {
          this.character = character;
          this.loadData();
        })
    }
    else {
      this.character = history.state;
      localStorage.setItem('characterUrl', this.character['url']);
      this.loadData();

    }
  }

  loadData() {
    forkJoin( this.observableService.getResouce( this.character['films']),
      this.observableService.getResouce( this.character['species']),
      this.observableService.getResouce( this.character['starships']))
        .subscribe(([ films, species, starships ]) => {
          this.character['films'] = films;
          this.character['species'] = species;
          this.character['starships'] = starships;
        }, err => {
          this.toastService.showError("Error no servidor ao pesquisar por nome, tente mais tarde. erro:" + err.statusText);
        })
  }
}


