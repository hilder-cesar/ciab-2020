import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderMenuComponent } from './page-header-menu.component';

describe('PageHeaderMenuComponent', () => {
  let component: PageHeaderMenuComponent;
  let fixture: ComponentFixture<PageHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
