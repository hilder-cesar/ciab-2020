import { Component } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    router: Router,
    viewportScroller: ViewportScroller
  ) {
    router.events
      .pipe(filter((event: Scroll) => event instanceof Scroll))
      .subscribe(event => {
        if (event.position) {
          viewportScroller.scrollToPosition(event.position);
        } else if (event.anchor) {
          viewportScroller.scrollToAnchor(event.anchor);
        } else {
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

}
