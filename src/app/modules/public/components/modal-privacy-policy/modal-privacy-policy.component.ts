import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-privacy-policy',
  templateUrl: './modal-privacy-policy.component.html',
  styleUrls: ['./modal-privacy-policy.component.sass']
})
export class ModalPrivacyPolicyComponent {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

}
