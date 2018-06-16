import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISchools } from '../shared/school';
import { SchoolService } from '../shared/school.service';
import { ISchoolsPreview } from '../shared/schoolPreview';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  errorMessage: any;
  _searchFilter: string;
  filteredSchools: ISchools[];
  schools: ISchools[] = [];
  schoolsPreview: ISchoolsPreview[] = [];
  checkedIds: string[] = [];
  displayCompareBtn = 'schoolSearch__compare--button--off';
  checkedNumber = 0;
  checkedLimit = false;

  get listFilter(): string {
    return this._searchFilter;
  }
  set listFilter(value: string) {
    this._searchFilter = value;
    this.filteredSchools = this.listFilter ? this.performFilter(this.listFilter) : this.schools;
  }

  constructor(
    private _schoolsService: SchoolService,
    private _router: Router) {

  }

  compare(): void {
    if (this.schoolsPreview.length > 0) {
      let compareQuery = '';
      for (let i = 0; i < this.schoolsPreview.length; i++) {
        compareQuery += this.schoolsPreview[i].AgeID + '&';
      }
      compareQuery = compareQuery.slice(0, -1);
      this._router.navigate(['/compare/', compareQuery]);
    }
  }

  onChange(code: string, name: string, check: boolean, id: string): void {
    const tempPreview: ISchoolsPreview = { AgeID: code, School_name: name };

    if (check && this.checkedNumber < 4) {
      this.schoolsPreview.push(tempPreview);

      this.schoolsPreview.sort();

      this.checkedNumber++;
      if (this.checkedNumber > 3) {
        this.checkedLimit = true;
      }
    } else if (this.checkedNumber > -1) {
      const index = this.schoolsPreview.findIndex(s => s.AgeID === code);
      if (index > -1) {
        this.schoolsPreview.splice(index, 1);
      }
      this.checkedNumber--;
      if (this.checkedNumber < 4) {
        this.checkedLimit = false;
      } else {
        alert('an indexing error has been encountered behind the scenes');
      }
    }

    if (this.schoolsPreview.length > 0) {
      this.displayCompareBtn = 'schoolSearch__compare--button--fadeIn';
    } else {
      this.displayCompareBtn = 'schoolSearch__compare--button--off';
    }
  }

  checkID(id: string): boolean {
    const index = this.schoolsPreview.findIndex(s => s.AgeID === id);
    if (index > -1) {
      return true;
    } else {
      if (this.checkedLimit) {
        return false;
      }
    }
    return true;
  }

  redirect(code: string) {
    this._router.navigate(['/school/', code]);
  }

  removeSchool(school: ISchoolsPreview) {
    if (this.checkedNumber > -1) {
      let index = this.schoolsPreview.findIndex(s => s.AgeID === school.AgeID);

      if (index > -1) {
        this.schoolsPreview.splice(index, 1);
      }

      index = this.schools.findIndex(s => s.AgeID === school.AgeID);

      if (index > -1) {
        this.schools[index].Checked = false;
      }

      this.checkedNumber--;
      if (this.checkedNumber < 4) {
        this.checkedLimit = false;
      } else {
        alert('an indexing error has been encountered behind the scenes');
      }
    }
  }

  performFilter(filterBy: string): ISchools[] {
    this._schoolsService.getSchools(filterBy).subscribe(schools => {
      this.filteredSchools = schools.sort();
      this.filteredSchools.map(e => e.Checked = false);
    },
      error => this.errorMessage = <any>error);

    return this.filteredSchools;
  }


  ngOnInit(): void {
    this._schoolsService.getSchools()
      .subscribe(schools => {
        this.schools.map(e => e.Checked = false);
        this.schools = schools.sort();
        this.filteredSchools = this.schools;
      },
        error => this.errorMessage = <any>error);
  }

}
