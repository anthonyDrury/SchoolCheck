import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISchools } from '../shared/school';
import { SchoolService } from '../shared/school.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  errorMessage: any;
  schoolCompareDetails: ISchools[];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _SchoolService: SchoolService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id').split('&');
    if (param) {
      this.getSchoolCompareDetails(param);
    }
  }


  getSchoolCompareDetails(id: string[]): void {
    this._SchoolService.getSchoolCompareDetails(id)
    .subscribe(
      school => {
        this.schoolCompareDetails = school;
      },
      error => this.errorMessage = <any>error);
  }


  onBack(): void {
    this._router.navigate(['/']);
  }
}
