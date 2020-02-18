import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit {

  headerClass = '';
  navVisible = false;

  @ViewChild('navButtonToggle', { static: true })
  navButtonToggle: ElementRef;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    const $windowResize = fromEvent(window, 'resize');
    const $windowScroll = fromEvent(window, 'scroll');
    const $navToggleClick = fromEvent(this.navButtonToggle.nativeElement, 'click');
    merge($windowResize, $windowScroll, $navToggleClick)
      .subscribe(() => {
        if (window.innerWidth > 1200) {
          this.headerClass = window.scrollY > 0 ? 'header-background-color' : '';
        } else {
          this.headerClass = this.navVisible || window.scrollY > 0 ? 'header-background-color' : '';
        }
      });
  }

  redirectTo(event: any, route: string, fragment?: string): void {
    event.stopPropagation();
    fragment
      ? this.router.navigate([route], { fragment })
      : this.router.navigate([route]);
    this.navVisible = false;
  }

  toggleNav(): void {
    this.navVisible = !this.navVisible;
  }

}
