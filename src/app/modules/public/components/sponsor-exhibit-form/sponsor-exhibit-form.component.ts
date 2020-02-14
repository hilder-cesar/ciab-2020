import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sponsor-exhibit-form',
  templateUrl: './sponsor-exhibit-form.component.html',
  styleUrls: ['./sponsor-exhibit-form.component.sass']
})
export class SponsorExhibitFormComponent implements OnInit {

  sponsorExhibitForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.sponsorExhibitForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log('this.sponsorExhibitForm.value', this.sponsorExhibitForm.value);
  }

}
