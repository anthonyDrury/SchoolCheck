import { Component, OnInit, Input, Pipe } from '@angular/core';
import { ISchools } from '../shared/school';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})

export class TableDetailComponent implements OnInit {
  @Input() schoolDetails: ISchools;

  constructor() { }

  ngOnInit() {
  }

}

