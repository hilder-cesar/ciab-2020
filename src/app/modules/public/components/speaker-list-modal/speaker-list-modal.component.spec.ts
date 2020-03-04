import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerListModalComponent } from './speaker-list-modal.component';

describe('SpeakerListModalComponent', () => {
  let component: SpeakerListModalComponent;
  let fixture: ComponentFixture<SpeakerListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
