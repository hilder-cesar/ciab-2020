import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorExhibitFormComponent } from './sponsor-exhibit-form.component';

describe('SponsorExhibitFormComponent', () => {
  let component: SponsorExhibitFormComponent;
  let fixture: ComponentFixture<SponsorExhibitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorExhibitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorExhibitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
