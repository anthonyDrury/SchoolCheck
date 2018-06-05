import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home.component';
import { CompareComponent } from '../compare/compare.component';
import { SchoolDetailComponent } from '../school-detail/school-detail.component';



import { RouterModule } from '@angular/router';
import { SchoolService } from '../shared/school.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    SchoolDetailComponent,
    CompareComponent
  ],
  providers: [
    SchoolService
  ]
})
export class HomeModule { }
