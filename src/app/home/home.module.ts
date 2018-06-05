import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home.component';
import { SchoolDetailComponent } from './school-detail.component';
import { SchoolCompareComponent } from './school-compare.component';


import { RouterModule } from '@angular/router';
import { SchoolGuardService } from './school-guard.service';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    SchoolDetailComponent,
    SchoolCompareComponent
  ],
  providers: [
    HomeService,
    SchoolGuardService
  ]
})
export class HomeModule { }
