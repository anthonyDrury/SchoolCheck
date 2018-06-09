import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDetailComponent } from './table-detail.component';
import { SchoolDetailComponent } from './school-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TableDetailComponent,
    SchoolDetailComponent
  ]
})
export class SchoolDetailModule { }
