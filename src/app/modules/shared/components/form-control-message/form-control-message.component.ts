import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-message',
  templateUrl: './form-control-message.component.html',
  styleUrls: ['./form-control-message.component.sass']
})
export class FormControlMessageComponent implements OnInit {

  @Input() abstractControl?: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
