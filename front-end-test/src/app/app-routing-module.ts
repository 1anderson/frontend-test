import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from '../app/components/character-list/character-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CharacterListComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}