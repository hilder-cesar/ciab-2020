import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-keynote-speaker-modal',
  templateUrl: './keynote-speaker-modal.component.html',
  styleUrls: ['./keynote-speaker-modal.component.sass']
})
export class KeynoteSpeakerModalComponent {

  @Input()
  item: any;

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

}
