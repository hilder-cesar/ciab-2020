import { Component, AfterViewInit, AfterViewChecked, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-speaker-list-modal',
  templateUrl: './speaker-list-modal.component.html',
  styleUrls: ['./speaker-list-modal.component.sass']
})
export class SpeakerListModalComponent implements AfterViewInit, AfterViewChecked {

  @Input()
  speakerList: any[];

  @Input()
  speakerSelected: number;

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
    for (let i = 0; i < this.speakerSelected; i++) {
      this.carousel.next();
    }
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

}
