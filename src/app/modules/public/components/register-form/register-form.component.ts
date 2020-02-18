import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent {

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
