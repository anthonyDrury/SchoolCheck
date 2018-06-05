import { Component, OnInit } from '@angular/core';
import { ISchools } from './school';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {

  pageTitle: string;
  errorMessage: string;
  schoolDetails: ISchools;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _HomeService: HomeService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getSchoolDetails(id);
    }
  }

  getSchoolDetails(id: string): void {
    this._HomeService.getSchoolDetails(id)
    .subscribe(
      school => {
        this.schoolDetails = school;
        this.pageTitle = this.schoolDetails.School_name;
      },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/home']);
  }

}
