import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-register-form',
  templateUrl: './modal-register-form.component.html',
  styleUrls: ['./modal-register-form.component.sass']
})
export class ModalRegisterFormComponent {

  registerForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  handleSubmit() {
    console.log('this.registerForm.value', this.registerForm.value);
  }

}
