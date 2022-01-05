import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Contador
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DbzModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
