import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



import { ISchools } from '../shared/school';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {
  private _Url = '/api/get';
  constructor(private _http: HttpClient) { }


  getSchools(name?: string): Observable<ISchools[]> {

    if (name && name.length > 0) {
      const _UrlFilter = this._Url + '/' + name;
      return this._http.get<ISchools[]>(_UrlFilter).pipe(
        map(function (e) {
          return e;
        }),
        catchError(this.handleError));
    } else {
      return this._http.get<ISchools[]>(this._Url).pipe(
        map(function (e) {
          return e;
        }),
        catchError(this.handleError));
    }

  }

  getSchoolDetails(id: string): Observable<ISchools> {
    const _UrlFilter = this._Url + 'ID/' + id;
    return this._http.get<ISchools>(_UrlFilter).pipe(
      map(function (e) {
        return e;
      }),
      catchError(this.handleError));
  }

  getSchoolCompareDetails(id: string[]): Observable<ISchools[]> {
    id.join();
    const _UrlFilter = this._Url + 'ID/multi/' + id;
    return this._http.get<ISchools[]>(_UrlFilter).pipe(
      map(function (e) {
        return e;
      }),
      catchError(this.handleError));
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
