import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

import { CrudService } from '../../shared/services/crud/crud.service';
import { ConfigService } from '../../shared/services/config/config.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

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
  private load: boolean = false;
  public totalCharactersAmount: number = 0;

  constructor( private crudService: CrudService, private configService: ConfigService, private toastService: ToastService ) {
    this.resources = this.configService.getResources();

  }

  ngOnInit() {
    this._loadCharacters(
      this.currentPage,
      this.search
    );
  }

public goToPage(page: number): void {
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
    this.characterList = [];
    this.load = true;
     this.subscription = this.crudService.get<any>(this.resources['PEOPLE'], { page,search })
        .subscribe(data =>{
          this.characterList = data['results'];
          this.totalCharactersAmount = data['count'];
          this.load = false;
      }, err => {
          this.toastService.showError("Erro no servidor ao pesquisar por nome, tente mais tarde. erro:" + err.statusText + "status:" + err.status);
          this.load = false;
      });
    }

  public isLoad() {
    return this.load;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isSearch() {
    return this.search.length > 0;
  }

}
