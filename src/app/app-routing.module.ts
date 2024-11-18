import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './serie/series-list/series-list.component';

const routes: Routes = [
  {path:'', component: SeriesListComponent},
  {path:'series', loadChildren: () => import('./serie/serie.module').then(m => m.SerieModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
