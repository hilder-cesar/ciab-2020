import { Component, OnChanges, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef, ViewChildren, QueryList, SimpleChanges } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { gsap, TweenMax } from 'gsap';


interface Photo {
  name: string;
  description: string;
}

interface Gallery {
  slideCurrent: number;
  slides: number;
  lastRowPhotos: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnChanges, AfterViewInit, OnDestroy {

  @Input()
  photoList: Photo[];

  galleryModel: Gallery;

  @ViewChild('slidesContainer')
  slidesContainer: ElementRef;

  @ViewChildren('slide')
  slides: QueryList<ElementRef>;

  windowSubscription: null | Subscription = null;

  constructor(private elementRef: ElementRef) { }

  get slidesArray(): number[] {
    return Array(this.galleryModel.slides);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges && simpleChanges.photoList) {
      this.galleryModel = {
        slideCurrent: 0,
        slides: Math.ceil(this.photoList.length / 5),
        lastRowPhotos: this.photoList.length % 5
      };
    }
  }

  ngAfterViewInit() {
    this.setSlidesContainerWidth();
    this.setSlidesWidth();
    this.windowSubscription = fromEvent(window, 'resize')
      .subscribe(() => {
        this.setSlidesContainerWidth();
        this.setSlidesWidth();
      });
  }

  ngOnDestroy() {
    this.windowSubscription.unsubscribe();
  }

  setSlidesContainerWidth() {
    gsap.set(this.slidesContainer.nativeElement, {
      width: this.elementRef.nativeElement.clientWidth * this.slides.length + 30 * (this.slides.length - 1)
    });
  }

  setSlidesWidth() {
    gsap.set(this.slidesContainer.nativeElement, {
      x: this.calc()
    });
    this.slides.forEach((item) => {
      gsap.set(item.nativeElement, { width: this.elementRef.nativeElement.clientWidth });
    });
  }

  handleSlideTo(slide: number): void {
    this.galleryModel.slideCurrent = slide;
    TweenMax.to(this.slidesContainer.nativeElement, 1, {
      x: this.calc()
    });
  }

  calc(): number {
    const value =
      - this.elementRef.nativeElement.clientWidth * this.galleryModel.slideCurrent
      - this.galleryModel.slideCurrent * 30;
    return value;
  }

  getIndex(index: number, offset: number = 0): number {
    return index * 5 + offset;
  }

}
