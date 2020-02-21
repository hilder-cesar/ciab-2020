import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenericService } from 'src/app/services/generic/generic.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const SELECT_ONE_THEME = {
  id: null, theme: 'Todos'
};

const SELECT_ONE_PLACE = {
  id: null, place: 'Todos'
};

const SELECT_ONE_STAMP = {
  id: null, stamp: 'Todos'
};

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.sass']
})
export class ScheduleFormComponent implements OnInit {

  themeList: any[] = [SELECT_ONE_THEME];
  placeList: any[] = [SELECT_ONE_PLACE];
  stampList: any[] = [SELECT_ONE_STAMP];

  scheduleForm: FormGroup;

  @Output()
  scheduleFormChange: EventEmitter<any> = new EventEmitter();

  constructor(
    formBuilder: FormBuilder,
    private genericService: GenericService
  ) {
    this.scheduleForm = formBuilder.group({
      theme: [null],
      place: [null],
      stamp: [null]
    });
  }

  ngOnInit(): void {
    this.genericService.get('Events/GetThemes')
      .subscribe((response: any) => this.themeList = [SELECT_ONE_THEME, ...response.data]);

    this.genericService.get('Events/GetPlaces/92')
      .subscribe((response: any) => this.placeList = [SELECT_ONE_PLACE, ...response.data]);

    this.scheduleForm.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.scheduleFormChange.emit(value));

  }

}
