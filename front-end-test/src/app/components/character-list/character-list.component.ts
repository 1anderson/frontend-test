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
  private config = {}
  private list$: Array<any[]>;
  private resources = {};
  private _currentPage: number = 1;
  private _currentSearchValue: string = '';
  public totalUsersAmount: number = 0;

  constructor( private crudService: CrudService, private configService: ConfigService ) {
    this.resources = this.configService.getResources();

  }

  ngOnInit() {
    this._loadUsers(
      this._currentPage,
      this._currentSearchValue
    );
  }

public goToPage(page: number): void {
    this._currentPage = page;
    this._loadUsers(
      this._currentPage,
      this._currentSearchValue
    );
  }

  private _loadUsers(
    page: number = 1, searchParam: string = ''
  ) {
      this.crudService.get<any>(this.resources['PEOPLE'], {page})
      .subscribe(data =>{
        this.list$ = data['results'];
        this.totalUsersAmount = data['count'];
      });
    }

}
