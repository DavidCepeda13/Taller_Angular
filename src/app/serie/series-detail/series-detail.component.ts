import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { Input } from '@angular/core';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {
  @Input() serieDetail!: Serie;

  constructor() { }

  ngOnInit() {
  }

}
