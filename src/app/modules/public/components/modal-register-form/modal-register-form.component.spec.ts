import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterFormComponent } from './modal-register-form.component';

describe('ModalRegisterFormComponent', () => {
  let component: ModalRegisterFormComponent;
  let fixture: ComponentFixture<ModalRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
