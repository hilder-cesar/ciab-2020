import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { GenericService } from './../../../../services/generic/generic.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalVideoComponent } from '../../components/modal-video/modal-video.component';
import { ModalRegisterFormComponent } from '../../components/modal-register-form/modal-register-form.component';

interface Photo {
  path: string;
  description: string;
}

const PHOTO_LIST: Photo[] = [
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 1' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 2' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 3' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 4' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 5' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 6' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 7' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 8' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 9' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 10' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 11' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 12' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 13' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 14' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 15' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 16' },
  { path: '../assets/images/shared/gallery/photo-1.jpg', description: 'Photo 17' },
  { path: '../assets/images/home/video-1.jpg', description: 'Photo 18' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  photoList: Photo[] = PHOTO_LIST;
  speakerList: any[];

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private genericService: GenericService,
    private ngbModal: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.genericService.get('Events/GetAllKeyNoteSpeakers?limit=3')
      .subscribe((response: any) => {
        if (this.localeId === 'en') {
          response.data.map((item) => {
            item.function = item.function_en;
            item.miniCV = item.miniCVEn;
          });
        }
        this.speakerList = response.data;
      });
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
