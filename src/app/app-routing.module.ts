import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterAlterEgoComponent } from './view/character-alter-ego/character-alter-ego.component';
import { CharacterComponent } from './view/character/character.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character', component: CharacterComponent },
  {
    path: 'character/alterego/:characterName',
    component: CharacterAlterEgoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
