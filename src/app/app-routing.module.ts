import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'school/:id',
    component: SchoolDetailComponent
  },
  {
    path: 'compare/:id',
    component: CompareComponent
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
