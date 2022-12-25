import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterComponent } from './view/character/character.component';
import { CharacterCardComponent } from './shared/card/character-card/character-card.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './view/home/home.component';
import { CharacterAlterEgoComponent } from './view/character-alter-ego/character-alter-ego.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    CharacterCardComponent,
    HomeComponent,
    CharacterAlterEgoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
