import { Component, OnInit } from '@angular/core';

interface Photo {
  name: string;
  description: string;
}

const PHOTO_LIST: Photo[] = [
  { name: './assets/images/shared/gallery/photo-1.jpg', description: 'Photo 1' },
  { name: './assets/images/shared/gallery/photo-2.jpg', description: 'Photo 2' },
  { name: './assets/images/shared/gallery/photo-3.jpg', description: 'Photo 3' },
  { name: './assets/images/shared/gallery/photo-4.jpg', description: 'Photo 4' },
  { name: './assets/images/shared/gallery/photo-5.jpg', description: 'Photo 5' },
  { name: './assets/images/shared/gallery/photo-1.jpg', description: 'Photo 6' },
  { name: './assets/images/shared/gallery/photo-2.jpg', description: 'Photo 7' },
  { name: './assets/images/shared/gallery/photo-3.jpg', description: 'Photo 8' },
  { name: './assets/images/shared/gallery/photo-4.jpg', description: 'Photo 9' },
  { name: './assets/images/shared/gallery/photo-5.jpg', description: 'Photo 10' },
  { name: './assets/images/shared/gallery/photo-1.jpg', description: 'Photo 11' },
  { name: './assets/images/shared/gallery/photo-2.jpg', description: 'Photo 12' },
  { name: './assets/images/shared/gallery/photo-3.jpg', description: 'Photo 13' }
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
