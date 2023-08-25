import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy, AfterViewInit {
  routerEvents: any;
  constructor(private router: Router) {
    this.routerEvents = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log(event.url);
          if (event.url == "home") {
            return
          }
          else if (event.url == "about") {
            return
          }
          else if (event.url == "shop") {
            return
          }
          else if (event.url == "contact") {
            return
          }
          else if (event.url == "blog") {
            return
          }
          else {
            return
          }
        }
        else
          return
      }
    )
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.routerEvents.unsubscribe();
    // Unsubscribe to avoid memory leak
  }
}
