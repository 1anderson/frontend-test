import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component'



@NgModule({
  declarations: [CharacterListComponent, CharacterDetailComponent, PaginationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
