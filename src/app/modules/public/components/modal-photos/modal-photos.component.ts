import { Component, AfterViewInit, AfterViewChecked, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-photos',
  templateUrl: './modal-photos.component.html',
  styleUrls: ['./modal-photos.component.sass']
})
export class ModalPhotosComponent implements AfterViewInit, AfterViewChecked {

  @Input()
  photoList: any[];

  @Input()
  photoSelected: number;

  @ViewChild('carousel', { static: false })
  carousel: NgbCarousel;

  constructor(
    public ngbActiveModal: NgbActiveModal,
    config: NgbCarouselConfig,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    config.wrap = false;
    config.keyboard = true;
  }

  ngAfterViewInit(): void {
    this.carousel.pause();
    for (let i = 0; i < this.photoSelected; i++) {
      this.carousel.next();
    }
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

}
