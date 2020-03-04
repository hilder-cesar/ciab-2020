import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRegulationComponent } from '../../components/modal-regulation/modal-regulation.component';

@Component({
  selector: 'app-fintech',
  templateUrl: './fintech.component.html',
  styleUrls: ['./fintech.component.sass']
})
export class FintechComponent implements OnInit {

  constructor(
    public ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModalRegulation(): void {
    this.ngbModal.open(ModalRegulationComponent, { size: 'lg', centered: true });
  }

}
