import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KeynoteSpeakerModalComponent } from '../keynote-speaker-modal/keynote-speaker-modal.component';

@Component({
  selector: 'app-keynote-speaker',
  templateUrl: './keynote-speaker.component.html',
  styleUrls: ['./keynote-speaker.component.sass']
})
export class KeynoteSpeakerComponent {

  @Input()
  keynoteSpeakerData: any;

  constructor(private ngbModal: NgbModal) { }

  openKeynoteSpeakerModal() {
    const modalRef = this.ngbModal.open(KeynoteSpeakerModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.keynoteSpeakerData = this.keynoteSpeakerData;
  }

}
