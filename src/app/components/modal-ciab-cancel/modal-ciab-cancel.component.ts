import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-ciab-cancel',
  templateUrl: './modal-ciab-cancel.component.html',
  styleUrls: ['./modal-ciab-cancel.component.sass']
})
export class ModalCiabCancelComponent implements OnInit {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
