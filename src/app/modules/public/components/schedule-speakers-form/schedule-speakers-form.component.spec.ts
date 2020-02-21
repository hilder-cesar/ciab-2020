import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSpeakersFormComponent } from './schedule-speakers-form.component';

describe('ScheduleSpeakersFormComponent', () => {
  let component: ScheduleSpeakersFormComponent;
  let fixture: ComponentFixture<ScheduleSpeakersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSpeakersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSpeakersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
