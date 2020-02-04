import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiabComponent } from './ciab.component';

describe('CiabComponent', () => {
  let component: CiabComponent;
  let fixture: ComponentFixture<CiabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
