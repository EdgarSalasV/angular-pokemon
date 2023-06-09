import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { HomeComponent } from './components/views/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { FavoritesComponent } from './components/views/favorites/favorites.component';
import { SectionTitleComponent } from './components/common/section-title/section-title.component';
import { PokeFavoritesTableComponent } from './components/poke-favorites-table/poke-favorites-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeDetailComponent,
    PokeTableComponent,
    HomeComponent,
    SectionTitleComponent,
    FavoritesComponent,
    PokeFavoritesTableComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
