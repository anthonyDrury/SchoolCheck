import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';
import { ISchools } from './school';

@Component({
  selector: 'app-school-compare',
  templateUrl: './school-compare.component.html',
  styleUrls: ['./school-compare.component.scss']
})
export class SchoolCompareComponent implements OnInit {
  errorMessage: any;
  schoolCompareDetails: ISchools[];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _HomeService: HomeService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id').split('&');
    if (param) {
      const id = param;
      this.getSchoolCompareDetails(param[0], param[1], param[2], param[3]);
    }
  }


  getSchoolCompareDetails(id1: string, id2: string, id3?: string, id4?: string): void {
    this._HomeService.getSchoolCompareDetails(id1, id2, id3, id4)
    .subscribe(
      school => {
        this.schoolCompareDetails = school;
      },
      error => this.errorMessage = <any>error);
  }
}
