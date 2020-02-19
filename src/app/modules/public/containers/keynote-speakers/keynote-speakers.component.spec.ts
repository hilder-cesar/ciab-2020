import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteSpeakersComponent } from './keynote-speakers.component';

describe('KeynoteSpeakersComponent', () => {
  let component: KeynoteSpeakersComponent;
  let fixture: ComponentFixture<KeynoteSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeynoteSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeynoteSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
