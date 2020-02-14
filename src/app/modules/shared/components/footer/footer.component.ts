import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private modalService: NgbModal
  ) {
    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true })
      .result
        .then(() => {
          this.registerForm.reset();
        })
        .catch(() => {
          this.registerForm.reset();
        });
  }

  handleSubmit() {
    console.log('this.registerForm.value', this.registerForm.value);
  }

}
