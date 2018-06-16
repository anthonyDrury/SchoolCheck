import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { SchoolService } from './school.service';
import { CoEdPipe } from '../shared/co-ed.pipe';
import { NoDataPipe } from './no-data.pipe';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CoEdPipe,
    NoDataPipe
  ],
  exports: [
    FormsModule,
    CoEdPipe,
    NoDataPipe,
  ],
  providers: [
    SchoolService
  ]
})
export class SharedModule { }
