import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID } from '@angular/core';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { ModalRegisterFormComponent } from './modules/public/components/modal-register-form/modal-register-form.component';
import { ModalTermsUseComponent } from './modules/public/components/modal-terms-use/modal-terms-use.component';
import { ModalPrivacyPolicyComponent } from './modules/public/components/modal-privacy-policy/modal-privacy-policy.component';
import { fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {

  headerClass = '';
  navVisible = false;

  @ViewChild('navButtonToggle', { static: true })
  navButtonToggle: ElementRef;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private router: Router,
    viewportScroller: ViewportScroller,
    private modalService: NgbModal
  ) {
    this.router.events
      .pipe(filter((event: Scroll) => event instanceof Scroll))
      .subscribe((event: any) => {
        if (event.routerEvent instanceof NavigationEnd) {
          this.navVisible = false;
        }
        if (event.position) {
          viewportScroller.scrollToPosition(event.position);
        } else if (event.anchor) {
          viewportScroller.scrollToAnchor(event.anchor);
        } else {
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

  get buttonLanguageText(): string {
    return this.localeId === 'pt' ? 'EN' : 'PT';
  }

  get buttonLanguageHref(): string {
    return this.localeId === 'pt' ? '../en' : '../pt';
  }

  ngOnInit(): void {
    console.log('this.localeId', this.localeId);
    const liList = document.querySelectorAll('.nav-item > ul > li');
    liList.forEach((item) => item.addEventListener('click', (event) => event.stopPropagation()));
  }

  ngAfterViewInit(): void {
    const $windowResize = fromEvent(window, 'resize');
    const $windowScroll = fromEvent(window, 'scroll');
    const $navToggleClick = fromEvent(this.navButtonToggle.nativeElement, 'click');
    merge($windowResize, $windowScroll, $navToggleClick)
      .subscribe(() => {
        if (window.innerWidth > 1200) {
          this.headerClass = window.scrollY > 0 ? 'header-background-color' : '';
        } else {
          this.headerClass = this.navVisible || window.scrollY > 0 ? 'header-background-color' : '';
        }
      });
  }

  toggleNav(): void {
    this.navVisible = !this.navVisible;
  }

  openModalRegisterForm(): void {
    this.modalService.open(ModalRegisterFormComponent, { size: 'lg', centered: true })
      .result
        .then((result) => {
          console.log('result', result);
        })
        .catch(() => {
        });
  }

  openModalTermsUse(): void {
    this.modalService.open(ModalTermsUseComponent, { size: 'lg', centered: true });
  }

  openModalPrivacyPolicy(): void {
    this.modalService.open(ModalPrivacyPolicyComponent, { size: 'lg', centered: true });
  }

}
