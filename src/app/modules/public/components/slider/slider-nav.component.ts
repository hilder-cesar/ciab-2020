import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-nav',
  template: `
    <button type="button" class="btn ciab-button-icon ciab-button-icon-previous" (click)="slideToPrevious()"></button>
    <button
      type="button"
      class="btn ciab-button-icon ciab-button-icon-circle"
      *ngFor="let item of slidesNumberArray; let i = index;"
      [ngClass]="{ 'ciab-button-icon-circle-active': i === slideCurrent }"
      (click)="slideTo.emit(i)">
    </button>
    <button type="button" class="btn ciab-button-icon ciab-button-icon-next" (click)="slideToNext()"></button>
  `,
  styles: [`

    :host {
      position: absolute;
      z-index: 50;
      top: 50%;
      right: 16px;
      display: block;
      margin-top: -93px;
    }

    .ciab-button-icon {
      display: block;
      margin: 0;
    }

    .ciab-button-icon-previous {
      background-image: url('assets/images/icons/angle-down-solid-white.svg');
      background-size: 20px;
      margin-bottom: 8px;
      transform: rotate(180deg)
    }

    .ciab-button-icon-circle {
      position: relative;
    }

    .ciab-button-icon-circle:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      width: 10px;
      height: 10px;
      background-color: rgba(255, 255, 255, .5);
      border-radius: 100%;
      margin: -5px 0 0 -5px;
      transition: background-color 0.25s;
    }

    .ciab-button-icon-circle-active:before {
      background-color: rgba(255, 255, 255, 1);
    }

    .ciab-button-icon-next {
      background-image: url('assets/images/icons/angle-down-solid-white.svg');
      background-size: 20px;
      margin-top: 8px;
    }

  `]
})
export class SliderNavComponent {

  @Input()
  slidesNumber: number;

  @Input()
  slideCurrent: number;

  @Output()
  slideTo: EventEmitter<number> = new EventEmitter();

  get slidesNumberArray(): number[] {
    return Array(this.slidesNumber);
  }

  slideToPrevious() {
    const previousSlide = this.slideCurrent - 1;
    if (previousSlide >= 0) {
      this.slideTo.emit(previousSlide);
    } else {
      this.slideTo.emit(this.slidesNumber - 1);
    }
  }

  slideToNext() {
    const nextSlide = this.slideCurrent + 1;
    if (nextSlide < this.slidesNumber) {
      this.slideTo.emit(nextSlide);
    } else {
      this.slideTo.emit(0);
    }
  }

}
