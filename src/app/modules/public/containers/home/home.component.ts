import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalVideoComponent } from '../../components/modal-video/modal-video.component';
import { ModalRegisterFormComponent } from '../../components/modal-register-form/modal-register-form.component';

interface Photo {
  path: string;
  description: string;
}

const PHOTO_LIST: Photo[] = [
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo' }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  photoList: Photo[] = PHOTO_LIST;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private ngbModal: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openModalVideo(videoId: string): void {
    const modalRef = this.ngbModal.open(ModalVideoComponent, {
      size: 'xl',
      windowClass: 'ciab-modal-video',
      centered: true
    });
    modalRef.componentInstance.videoId = videoId;
  }

  openModalRegisterForm(): void {
    this.ngbModal.open(ModalRegisterFormComponent, { size: 'lg', centered: true });
  }

  redirectTo(route: string, fragment?: string): void {
    fragment
      ? this.router.navigate([route], { fragment })
      : this.router.navigate([route]);
  }

}
