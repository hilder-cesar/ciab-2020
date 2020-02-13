import { Component, OnInit } from '@angular/core';

interface Video {
  name: string;
  description: string;
}

const PHOTO_LIST: Video[] = [
  { name: 'video-1.jpg', description: 'Vídeo 1' },
  { name: 'video-2.jpg', description: 'Vídeo 2' },
  { name: 'video-3.jpg', description: 'Vídeo 3' },
  { name: 'video-4.jpg', description: 'Vídeo 4' },
  { name: 'video-5.jpg', description: 'Vídeo 5' }
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
