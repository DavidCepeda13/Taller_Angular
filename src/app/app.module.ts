import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieModule } from './serie/serie.module';
import { HttpClientModule } from '@angular/common/http';
import { SerieRoutingRoutes } from './serie/serie-routing.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule,
    HttpClientModule,
    SerieRoutingRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
