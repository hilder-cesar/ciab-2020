import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-terms-use',
  templateUrl: './modal-terms-use.component.html',
  styleUrls: ['./modal-terms-use.component.sass']
})
export class ModalTermsUseComponent {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

}
