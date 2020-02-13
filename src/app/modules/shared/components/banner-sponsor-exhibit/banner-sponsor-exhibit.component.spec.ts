import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSponsorExhibitComponent } from './banner-sponsor-exhibit.component';

describe('BannerSponsorExhibitComponent', () => {
  let component: BannerSponsorExhibitComponent;
  let fixture: ComponentFixture<BannerSponsorExhibitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSponsorExhibitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSponsorExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
