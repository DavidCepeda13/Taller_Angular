import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  /* <Atributos> */
  series: Array<Serie> = [];
  seasonsAverage: number = 0;
  selected: boolean = false;
  selectedSerie!: Serie;

  constructor(private serieService: SerieService) { }

  /* <Métodos> */
  getSeries(): void{
    this.serieService.getSeries().subscribe(
      (series) => {
        this.series = series;

        let count: number = 0;
        console.log(`Pasa aquí`);
        series.forEach(serie => {
          count++;
          this.seasonsAverage += serie.seasons;
        });
        this.seasonsAverage /= count;
      }
    );
  }

  onSelected(serie: Serie): void{
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
 
  }

}
