import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterFormComponent } from './../../components/register-form/register-form.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  constructor(
    private router: Router,
    private ngbModal: NgbModal
  ) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  openRegisterForm() {
    this.ngbModal.open(RegisterFormComponent, { size: 'lg', centered: true })
      .result
        .then((result: any) => {
          console.log('result', result);
        })
        .catch(() => {
        });
  }

}
