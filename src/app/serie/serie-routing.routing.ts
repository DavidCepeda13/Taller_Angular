import { Routes, RouterModule } from '@angular/router';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

const routes: Routes = [
  { path:'list', component: SeriesListComponent },
  { path:':id', component: SeriesDetailComponent }
];

export const SerieRoutingRoutes = RouterModule.forChild(routes);
