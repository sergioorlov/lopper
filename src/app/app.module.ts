import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { IntroComponent } from './components/main-layout/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
