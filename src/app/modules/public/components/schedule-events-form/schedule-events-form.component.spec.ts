import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEventsFormComponent } from './schedule-events-form.component';

describe('ScheduleEventsFormComponent', () => {
  let component: ScheduleEventsFormComponent;
  let fixture: ComponentFixture<ScheduleEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEventsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
