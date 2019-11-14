import { Component, OnInit } from '@angular/core';

import { CrudService } from '../../shared/services/crud/crud.service';
import { ConfigService } from '../../shared/services/config/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  private list$: Observable<any[]>;
  private resources = {};
  constructor( private crudService: CrudService, private configService: ConfigService ) {
    this.resources = this.configService.getResources();

  }

  ngOnInit() {
    this.list$ = this.crudService.get<any>(this.resources['PEOPLE']);
  }

}
