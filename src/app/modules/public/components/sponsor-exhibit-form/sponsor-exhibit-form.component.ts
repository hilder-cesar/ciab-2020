import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from './../../../../services/generic/generic.service';

@Component({
  selector: 'app-sponsor-exhibit-form',
  templateUrl: './sponsor-exhibit-form.component.html',
  styleUrls: ['./sponsor-exhibit-form.component.sass']
})
export class SponsorExhibitFormComponent {

  message: undefined | string;
  messageSuccess: undefined | boolean;
  sponsorExhibitForm: FormGroup;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    formBuilder: FormBuilder,
    private genericService: GenericService
  ) {
    this.sponsorExhibitForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  alertClass(): string {
    return this.messageSuccess
      ? 'alert-success'
      : 'alert-danger';
  }

  handleSubmit() {
    const value = JSON.stringify(this.sponsorExhibitForm.value);
    this.sponsorExhibitForm.disable();
    this.genericService.get(`Publicacoes/SendEMail?obj=${value}`)
      .subscribe(() => {
        if (this.localeId === 'pt') {
          this.message = 'O seu contato foi realizado com sucesso.';
        } else {
          this.message = 'Your contact was successful.';
        }
        this.messageSuccess = true;
        this.sponsorExhibitForm.enable();
        this.sponsorExhibitForm.reset();
      }, () => {
        if (this.localeId === 'pt') {
          this.message = 'Ocorreu um erro ao realizar o seu contato.';
        } else {
          this.message = 'An error occurred while making your contact.';
        }
        this.messageSuccess = false;
        this.sponsorExhibitForm.enable();
      });
  }

}
