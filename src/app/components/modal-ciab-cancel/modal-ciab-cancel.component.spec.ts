import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCiabCancelComponent } from './modal-ciab-cancel.component';

describe('ModalCiabCancelComponent', () => {
  let component: ModalCiabCancelComponent;
  let fixture: ComponentFixture<ModalCiabCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCiabCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCiabCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
