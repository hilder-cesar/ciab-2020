import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  openModalCadastreSe(modalCadastreSe: TemplateRef<NgbModal>): void {
    this.modalService.open(modalCadastreSe, { size: 'lg', centered: true })
      .result
        .then(() => {
          this.registerForm.reset();
        })
        .catch(() => {
          this.registerForm.reset();
        });
  }

  openModal(event: any, modal: TemplateRef<NgbModal>): void {
    event.preventDefault();
    this.modalService.open(modal, { size: 'lg', centered: true });
  }

  handleSubmit() {
    console.log('this.registerForm.value', this.registerForm.value);
  }

}