import { Component, Inject, LOCALE_ID } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from './../../../../services/generic/generic.service';

@Component({
  selector: 'app-modal-register-form',
  templateUrl: './modal-register-form.component.html',
  styleUrls: ['./modal-register-form.component.sass']
})
export class ModalRegisterFormComponent {

  message: undefined | string;
  messageSuccess: undefined | boolean;
  registerForm: FormGroup;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public ngbActiveModal: NgbActiveModal,
    formBuilder: FormBuilder,
    private genericService: GenericService
  ) {
    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  alertClass(): string {
    return this.messageSuccess
      ? 'alert-success'
      : 'alert-danger';
  }

  handleSubmit() {
    const value = JSON.stringify(this.registerForm.value);
    this.registerForm.disable();
    this.genericService.get(`Profile/Register?obj=${value}`)
      .subscribe(() => {
        if (this.localeId === 'pt') {
          this.message = 'O seu cadastro foi realizado com sucesso.';
        } else {
          this.message = 'Your registration was successful.';
        }
        this.messageSuccess = true;
        this.registerForm.enable();
        this.registerForm.reset();
      }, () => {
        if (this.localeId === 'pt') {
          this.message = 'Ocorreu um erro ao realizar o seu cadastro.';
        } else {
          this.message = 'An error occurred while performing your registration.';
        }
        this.messageSuccess = false;
        this.registerForm.enable();
      });
  }

}
