import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteSpeakerModalComponent } from './keynote-speaker-modal.component';

describe('KeynoteSpeakerModalComponent', () => {
  let component: KeynoteSpeakerModalComponent;
  let fixture: ComponentFixture<KeynoteSpeakerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeynoteSpeakerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeynoteSpeakerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
