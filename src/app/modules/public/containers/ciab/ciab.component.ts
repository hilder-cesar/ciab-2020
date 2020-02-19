import { Component, OnInit } from '@angular/core';

interface Photo {
  path: string;
  description: string;
}

const PHOTO_LIST: Photo[] = [
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 1' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 2' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 3' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 4' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 5' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 6' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 7' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 8' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 9' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 10' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 11' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 12' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 13' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 14' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 15' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 16' },
  { path: 'assets/images/shared/gallery/photo-1.jpg', description: 'Photo 17' },
  { path: 'assets/images/home/video-1.jpg', description: 'Photo 18' },
];

@Component({
  selector: 'app-ciab',
  templateUrl: './ciab.component.html',
  styleUrls: ['./ciab.component.sass']
})
export class CiabComponent implements OnInit {

  photoList: Photo[] = PHOTO_LIST;

  constructor() { }

  ngOnInit() {
  }

}
