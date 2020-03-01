import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-schedule-events-form',
  templateUrl: './schedule-events-form.component.html',
  styleUrls: ['./schedule-events-form.component.sass']
})
export class ScheduleEventsFormComponent implements OnInit {

  @Input()
  themeList: any[] = [];

  @Input()
  placeList: any[] = [];

  scheduleEventsForm: FormGroup;

  @Output()
  scheduleEventsFormChange: EventEmitter<any> = new EventEmitter();

  constructor(
    formBuilder: FormBuilder
  ) {
    this.scheduleEventsForm = formBuilder.group({
      themes: [[]],
      places: [[]]
    });
  }

  ngOnInit(): void {
    this.scheduleEventsForm.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.scheduleEventsFormChange.emit(value));
  }

}
