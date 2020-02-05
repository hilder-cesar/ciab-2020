import { Component, AfterContentInit, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { gsap, TimelineMax } from 'gsap';
import { interval, Observable, merge, Subject, BehaviorSubject } from 'rxjs';
import { exhaustMap, takeWhile, mapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements AfterContentInit {

  @ContentChildren('slide')
  slides: QueryList<ElementRef>;

  slideCurrent = 0;
  slideNext: null | number = null;

  handleSlideTo: Subject<number> = new Subject();
  isLocked: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    setInterval(() => {
      console.log('this.slideCurrent', this.slideCurrent);
      console.log('this.isLocked.getValue()', this.isLocked.getValue());
    }, 1000);
  }

  ngAfterContentInit() {

    if (this.slides) {
      this.slides.forEach((item, i) => {
        if (i !== 0) {
          gsap.set(item.nativeElement, { display: 'none', opacity: 0 });
        }
      });
    }

    merge(
      interval(1000)
        .pipe(map(() => {
          const slideNextTemporary = this.slideCurrent + 1;
          const slideNext = slideNextTemporary > this.slides.length - 1 ? 0 : slideNextTemporary;
          return slideNext;
        })),
      this.handleSlideTo
        .pipe(map((value) => {
          const slideNext = value > this.slides.length - 1 ? 0 : value;
          return slideNext;
        }))
    )
      .pipe(takeWhile(() => this.isLocked.getValue() === false))
      .subscribe((result) => {
        console.log('result', result);
        this.isLocked.next(true);
        setTimeout(() => {
          this.slideCurrent = result;
          this.slideNext = null;
          this.isLocked.next(false);
        }, 3000);
      });

    // merge(
    //   this.handleSlideTo
    // )
    //   .pipe(takeWhile(() => !this.isLocked.getValue()))
    //   .subscribe((result) => {
    //     console.log(result);
    //     this.isLocked.next(true);
    //     this.slideFromTo(this.slideCurrent, result).subscribe();
    //   });

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
        this.isLocked.next(false);
        observer.complete();
      };

      new TimelineMax({ onStart, onComplete })
        .to(slideCurrent, .5, { opacity: 0 }, 'a')
        .to(slideNext, .5, { opacity: 1 }, 'a')
        .play();

    });
  }

}
