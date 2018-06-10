import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SchoolDetailGuardService {

  constructor(private _router: Router) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      console.log('Invalid School Detail URL');
      this._router.navigate(['/404']);
      return false;
    }
    return true;
  }
}
