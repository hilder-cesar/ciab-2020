import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTermsUseComponent } from './modal-terms-use.component';

describe('ModalTermsUseComponent', () => {
  let component: ModalTermsUseComponent;
  let fixture: ComponentFixture<ModalTermsUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTermsUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTermsUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
