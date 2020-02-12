import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-nav',
  template: `
    <div class="row justify-content-center mt-3">
      <div class="col-auto">
        <button
          type="button"
          class="app-gallery-button app-gallery-button-previous"
          [disabled]="slideCurrent === 0"
          (click)="slideToPrevious()">
        </button>
      </div>
      <div class="col-auto">
        <button
          type="button"
          class="app-gallery-button"
          [disabled]="slideCurrent === slidesNumber -1"
          (click)="slideToNext()">
        </button>
      </div>
    </div>
  `,
  styles: [`

    .app-gallery-button {
      width: 40px;
      height: 40px;
      background-color: transparent;
      background-image: url('./../../../../../assets/images/icons/long-arrow-right.svg');
      background-repeat: no-repeat;
      background-size: 20px 10px;
      background-position: center;
      border: 2px solid #00A9C2;
      border-radius: 100%;
      transition: opacity .25s;
    }

    .app-gallery-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .app-gallery-button-previous {
      transform: rotate(180deg);
    }

  `]
})
export class GalleryNavComponent {

  @Input()
  slidesNumber: number;

  @Input()
  slideCurrent: number;

  @Output()
  slideTo: EventEmitter<number> = new EventEmitter();

  slideToPrevious() {
    const previousSlide = this.slideCurrent - 1;
    if (previousSlide >= 0) {
      this.slideTo.emit(previousSlide);
    }
  }

  slideToNext() {
    const nextSlide = this.slideCurrent + 1;
    if (nextSlide < this.slidesNumber) {
      this.slideTo.emit(nextSlide);
    }
  }

}
