import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { ISchools } from '../shared/school';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {
  private _Url = 'assets/datasets/Merged-Data.JSON';
  constructor(private _http: HttpClient) { }

  getSchools(): Observable<ISchools[]> {
    return this._http.get<ISchools[]>(this._Url).pipe(
      map(function(e) {
        return e.map( function(obj) {
          obj.Checked = false;
          return obj;
        });
      }),
    catchError(this.handleError));
  }

  getSchoolDetails(id: string): Observable < ISchools > {
    return this.getSchools().pipe(
      map((school: ISchools[]) => school.find(s => s.AgeID.toString() === id)));
  }

  getSchoolCompareDetails(id1: string, id2: string, id3?: string, id4?: string): Observable < ISchools[] > {
    return this.getSchools().pipe(
      map((school: ISchools[]) => school.filter(s => s.AgeID.toString() === id1 ||
        s.AgeID.toString() === id2 || s.AgeID.toString() === id3 || s.AgeID.toString() === id4)));
  }

  private handleError(err) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
