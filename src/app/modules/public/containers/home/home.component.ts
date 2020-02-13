import { Component, OnInit } from '@angular/core';

interface Video {
  name: string;
  description: string;
}

const PHOTO_LIST: Video[] = [
  { name: './assets/images/home/video-1.jpg', description: 'Vídeo 1' },
  { name: './assets/images/home/video-2.jpg', description: 'Vídeo 2' },
  { name: './assets/images/home/video-3.jpg', description: 'Vídeo 3' },
  { name: './assets/images/home/video-4.jpg', description: 'Vídeo 4' },
  { name: './assets/images/home/video-5.jpg', description: 'Vídeo 5' }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  photoList: Video[] = PHOTO_LIST;

  constructor() { }

  ngOnInit() {
  }

}
