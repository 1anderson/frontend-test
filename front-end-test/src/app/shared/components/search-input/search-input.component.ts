import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent implements OnDestroy {
  @Input() readonly placeholder: string = '';
  @Output() setValue: EventEmitter<string> = new EventEmitter();
  private _searchSubject: Subject<string> = new Subject();
  constructor() {
    this._setSearchSubscription();
  }
  public updateSearch(searchTextValue: string) {
    this._searchSubject.next( searchTextValue );
  }
  private _setSearchSubscription() {
    this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.setValue.emit( searchValue );
    });
  }
  ngOnDestroy() {
    this._searchSubject.unsubscribe();
  }
}
