import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { gsap, TimelineMax } from 'gsap';
import { interval, Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit, AfterContentInit {

  @ContentChildren('slide')
  slides: QueryList<ElementRef>;

  slideCurrent = 0;
  slideNext: null | number = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {

    if (this.slides) {
      this.slides.forEach((item, i) => {
        if (i !== 0) {
          gsap.set(item.nativeElement, { display: 'none', opacity: 0 });
        }
      });
    }

    const interval$ = interval(100000)
      .subscribe(() => {
        this.slideNext = this.slideCurrent + 1;
        if (this.slideNext >= this.slides.length) {
          this.slideNext = 0;
        }
        this.slideFromTo(this.slideCurrent, this.slideNext)
          .subscribe();
      });

  }

  handleSlideTo(slide: number) {
    console.log('slide', slide);
  }

  slideFromTo(from: number, to: number): Observable<any> {
    return new Observable((observer) => {

      const slideCurrent = this.slides.toArray()[from].nativeElement;
      const slideNext = this.slides.toArray()[to].nativeElement;

      const onStart = () => {
        gsap.set(slideCurrent, { zIndex: 2 });
        gsap.set(slideNext, { display: 'block', zIndex: 3 });
      };

      const onComplete = () => {
        gsap.set(slideCurrent, { zIndex: 1 });
        gsap.set(slideNext, { display: 'block', zIndex: 2 });
        this.slideCurrent = this.slideNext;
        this.slideNext = null;
        observer.complete();
      };

      new TimelineMax({ onStart, onComplete })
        .to(slideCurrent, .5, { opacity: 0 }, 'a')
        .to(slideNext, .5, { opacity: 1 }, 'a').play();

    });
  }

}
