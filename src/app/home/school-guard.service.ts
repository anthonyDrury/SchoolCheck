import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SchoolGuardService {

  constructor(private _router: Router) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1000) {
      console.log('Invalid school Id');
      this._router.navigate(['/home']);
      return false;
    }
    return true;
  }
}



