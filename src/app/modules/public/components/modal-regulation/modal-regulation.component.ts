import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-regulation',
  templateUrl: './modal-regulation.component.html',
  styleUrls: ['./modal-regulation.component.sass']
})
export class ModalRegulationComponent {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

}
