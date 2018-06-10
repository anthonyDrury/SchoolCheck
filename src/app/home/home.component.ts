import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISchools } from '../shared/school';
import { SchoolService } from '../shared/school.service';

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
  compareSchools: string[] = [];
  compareSchoolsNames: string[] = [];
  checkedIds: string[] = [];
  displayCompareBtn = 'schoolSearch__compare--button--off';
  checkedNumber = 0;
  checkedLimit = false;

  get listFilter(): string {
    return this._searchFilter;
  }
  set listFilter(value: string) {
    this._searchFilter = value;
    this.filteredSchools = this.listFilter ? this.performFilter(this.listFilter) : this.schools.slice(0, 10);
  }

  constructor(
    private _schoolsService: SchoolService,
    private _router: Router) {

  }

  compare(): void {
    if (this.compareSchools.length > 0) {
      let compareQuery = '';
      for (let i = 0; i < this.compareSchools.length; i++) {
        compareQuery += this.compareSchools[i] + '&';
      }
      compareQuery = compareQuery.slice(0, -1);
      this._router.navigate(['/compare/', compareQuery]);
    }
  }

  onChange(code: string, name: string, check: boolean, id: string): void {
    if (check && this.checkedNumber < 4) {
      this.compareSchools.push(code);
      this.compareSchoolsNames.push(name);

      this.compareSchools.sort();
      this.compareSchoolsNames.sort();

      this.checkedNumber++;
      if (this.checkedNumber > 3) {
        this.checkedLimit = true;
      }
    } else if (this.checkedNumber > -1) {
      let index = this.compareSchools.indexOf(code);
      if (index > -1) {
        this.compareSchools.splice(index, 1);
      }
      index = this.compareSchoolsNames.indexOf(name);
      if (index > -1) {
        this.compareSchoolsNames.splice(index, 1);
      }
      this.checkedNumber--;
      if (this.checkedNumber < 4) {
        this.checkedLimit = false;
      } else {
        alert('an indexing error has been encountered behind the scenes');
      }
    }

    if (this.compareSchools.length > 0) {
      this.displayCompareBtn = 'schoolSearch__compare--button--fadeIn';
    } else {
      this.displayCompareBtn = 'schoolSearch__compare--button--off';
    }
  }

  checkID(id: string): boolean {
    if (this.compareSchools.indexOf(id) > -1) {
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

  performFilter(filterBy: string): ISchools[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.schools.filter((school: ISchools) =>
      school.School_name.toLocaleLowerCase().indexOf(filterBy) !== -1)
      .slice(0, 10);
  }

  ngOnInit(): void {
    this._schoolsService.getSchools()
      .subscribe(schools => {
        this.schools = schools.sort();
        this.filteredSchools = this.schools.slice(0, 10);
      },
        error => this.errorMessage = <any>error);
  }

}
