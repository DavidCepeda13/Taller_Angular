import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { RouterModule } from '@angular/router';
import { SerieRoutingRoutes } from './serie-routing.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SerieRoutingRoutes
  ],
  exports: [SeriesListComponent],
  declarations: [SeriesListComponent, SeriesDetailComponent]
})
export class SerieModule { }
