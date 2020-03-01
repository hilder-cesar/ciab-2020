import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const LETTER_LIST = [
  { id: 'A', letter: 'A' },
  { id: 'B', letter: 'B' },
  { id: 'C', letter: 'C' },
  { id: 'D', letter: 'D' },
  { id: 'E', letter: 'E' },
  { id: 'F', letter: 'F' },
  { id: 'G', letter: 'G' },
  { id: 'H', letter: 'H' },
  { id: 'I', letter: 'I' },
  { id: 'J', letter: 'J' },
  { id: 'K', letter: 'K' },
  { id: 'L', letter: 'L' },
  { id: 'M', letter: 'M' },
  { id: 'N', letter: 'N' },
  { id: 'O', letter: 'O' },
  { id: 'P', letter: 'P' },
  { id: 'Q', letter: 'Q' },
  { id: 'R', letter: 'R' },
  { id: 'S', letter: 'S' },
  { id: 'T', letter: 'T' },
  { id: 'U', letter: 'U' },
  { id: 'V', letter: 'V' },
  { id: 'W', letter: 'W' },
  { id: 'X', letter: 'X' },
  { id: 'Y', letter: 'Y' },
  { id: 'Z', letter: 'Z' }
];

@Component({
  selector: 'app-schedule-speakers-form',
  templateUrl: './schedule-speakers-form.component.html',
  styleUrls: ['./schedule-speakers-form.component.sass']
})
export class ScheduleSpeakersFormComponent implements OnInit {

  @Input()
  themeList: any[] = [];

  letterList: any[] = LETTER_LIST;

  scheduleSpeakersForm: FormGroup;

  @Output()
  scheduleSpeakersFormChange: EventEmitter<any> = new EventEmitter();

  constructor(
    formBuilder: FormBuilder
  ) {
    this.scheduleSpeakersForm = formBuilder.group({
      themes: [[]],
      letters: [[]]
    });
  }

  ngOnInit(): void {
    this.scheduleSpeakersForm.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.scheduleSpeakersFormChange.emit(value));
  }

}
