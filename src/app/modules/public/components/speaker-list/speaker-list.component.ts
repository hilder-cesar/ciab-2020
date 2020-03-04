import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeakerListModalComponent } from '../speaker-list-modal/speaker-list-modal.component';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.sass']
})
export class SpeakerListComponent implements OnInit {

  @Input()
  speakerList: any[];

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openSpeakerListModal(index: number): void {
    const modalPhotosComponent = this.ngbModal.open(SpeakerListModalComponent, { size: 'xl', centered: true });
    modalPhotosComponent.componentInstance.speakerList = this.speakerList;
    modalPhotosComponent.componentInstance.speakerSelected = index;
  }

}
