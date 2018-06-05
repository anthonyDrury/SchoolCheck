import { Component, OnInit, Input } from '@angular/core';
import { ISchools } from '../shared/school';

@Component({
  selector: 'app-table-compare',
  templateUrl: './table-compare.component.html',
  styleUrls: ['./table-compare.component.scss']
})
export class TableCompareComponent implements OnInit {
  @Input() schoolCompareDetails: ISchools;


  constructor() { }

  ngOnInit() {
  }

}
