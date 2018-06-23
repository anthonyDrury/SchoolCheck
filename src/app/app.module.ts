import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { SchoolDetailModule } from './school-detail/school-detail.module';
import { CompareModule } from './compare/compare.module';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AboutUsModule } from './about-us/about-us.module';
import { SharedModule } from './shared/shared.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    SharedModule,
    FooterModule,
    HeaderModule,
    SchoolDetailModule,
    CompareModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AboutUsModule
  ],
  providers: [Angulartics2GoogleAnalytics],
  bootstrap: [AppComponent]
})
export class AppModule { }
