import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolDetailComponent } from './home/school-detail.component';
import { SchoolGuardService } from './home/school-guard.service';
import { SchoolCompareComponent } from './home/school-compare.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'home/:id',
    canActivate: [SchoolGuardService],
    component: SchoolDetailComponent
  },
  {
    path: 'compare/:id',
    component: SchoolCompareComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
