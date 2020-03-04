import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegulationComponent } from './modal-regulation.component';

describe('ModalRegulationComponent', () => {
  let component: ModalRegulationComponent;
  let fixture: ComponentFixture<ModalRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
