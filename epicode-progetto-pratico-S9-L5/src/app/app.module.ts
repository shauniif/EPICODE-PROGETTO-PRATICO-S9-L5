import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Brand1Component } from './pages/brand1/brand1.component';
import { Brand2Component } from './pages/brand2/brand2.component';
import { Brand3Component } from './pages/brand3/brand3.component';
import { MenuComponent } from './main-components/menu/menu.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Brand1Component,
    Brand2Component,
    Brand3Component,
    MenuComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
