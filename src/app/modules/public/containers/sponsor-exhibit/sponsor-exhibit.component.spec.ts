import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorExhibitComponent } from './sponsor-exhibit.component';

describe('SponsorExhibitComponent', () => {
  let component: SponsorExhibitComponent;
  let fixture: ComponentFixture<SponsorExhibitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorExhibitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
