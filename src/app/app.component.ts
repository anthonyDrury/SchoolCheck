import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public googleAnalytics: Angulartics2GoogleAnalytics,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) { }


  // Page Title Service
  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}

