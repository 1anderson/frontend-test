import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

import { CrudService } from '../../shared/services/crud/crud.service';
import { ConfigService } from '../../shared/services/config/config.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private config = {}
  private characterList: Array<any[]>;
  private resources = {};
  private currentPage: number = 1;
  private search: string = '';
  private subscription: Subscription;

  public totalCharactersAmount: number = 0;

  constructor( private crudService: CrudService, private configService: ConfigService ) {
    this.resources = this.configService.getResources();

  }

  ngOnInit() {
    this._loadCharacters(
      this.currentPage,
      this.search
    );
  }

public goToPage(page: number): void {
   this.characterList = [];
    this.currentPage = page;
    this._loadCharacters(
      this.currentPage,
      this.search
    );
  }

  public filterList(searchParam: string): void {
    this.search = searchParam;
    this._loadCharacters(
      this.currentPage,
      this.search
    );
  }

  private _loadCharacters(
    page: number = 1, search: string = ''
  ) {
     this.subscription = this.crudService.get<any>(this.resources['PEOPLE'], { page,search })
        .subscribe(data =>{
          this.characterList = data['results'];
          this.totalCharactersAmount = data['count'];
      });
    }

  public listIsEmpty() {
    if( this.characterList === undefined || this.characterList.length==0 && this.search === '') {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
