import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRegisterFormComponent } from './../../components/modal-register-form/modal-register-form.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent {

  constructor(
    private router: Router,
    private ngbModal: NgbModal
  ) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  openRegisterForm() {
    this.ngbModal.open(ModalRegisterFormComponent, { size: 'lg', centered: true })
      .result
        .then((result: any) => {
          console.log('result', result);
        })
        .catch(() => {
        });
  }

}
