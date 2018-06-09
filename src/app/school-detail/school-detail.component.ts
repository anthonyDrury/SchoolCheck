import { Component, OnInit } from '@angular/core';
import { ISchools } from '../shared/school';
import { SchoolService } from '../shared/school.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {
  errorMessage: string;
  schoolDetails: ISchools;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _SchoolService: SchoolService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getSchoolDetails(id);
    }
  }

  getSchoolDetails(id: string): void {
    this._SchoolService.getSchoolDetails(id)
    .subscribe(
      school => {
        this.schoolDetails = school;
      },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/']);
  }

}
