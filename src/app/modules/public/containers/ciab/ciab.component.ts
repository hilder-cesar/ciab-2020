import { Component } from '@angular/core';

interface Photo {
  path: string;
}

const PHOTO_LIST: Photo[] = [
  { path: 'assets/images/ciab/gallery/0001.jpg' },
  { path: 'assets/images/ciab/gallery/0002.jpg' },
  { path: 'assets/images/ciab/gallery/0003.jpg' },
  { path: 'assets/images/ciab/gallery/0004.jpg' },
  { path: 'assets/images/ciab/gallery/0005.jpg' },
  { path: 'assets/images/ciab/gallery/0006.jpg' },
  { path: 'assets/images/ciab/gallery/0007.jpg' },
  { path: 'assets/images/ciab/gallery/0008.jpg' },
  { path: 'assets/images/ciab/gallery/0009.jpg' },
  { path: 'assets/images/ciab/gallery/0010.jpg' },
  { path: 'assets/images/ciab/gallery/0011.jpg' },
  { path: 'assets/images/ciab/gallery/0012.jpg' },
  { path: 'assets/images/ciab/gallery/0013.jpg' },
  { path: 'assets/images/ciab/gallery/0014.jpg' },
  { path: 'assets/images/ciab/gallery/0015.jpg' },
  { path: 'assets/images/ciab/gallery/0016.jpg' },
  { path: 'assets/images/ciab/gallery/0017.jpg' },
  { path: 'assets/images/ciab/gallery/0018.jpg' },
  { path: 'assets/images/ciab/gallery/0019.jpg' },
  { path: 'assets/images/ciab/gallery/0020.jpg' },
  { path: 'assets/images/ciab/gallery/0021.jpg' },
  { path: 'assets/images/ciab/gallery/0022.jpg' },
  { path: 'assets/images/ciab/gallery/0023.jpg' },
  { path: 'assets/images/ciab/gallery/0024.jpg' },
  { path: 'assets/images/ciab/gallery/0025.jpg' },
  { path: 'assets/images/ciab/gallery/0026.jpg' },
  { path: 'assets/images/ciab/gallery/0027.jpg' },
  { path: 'assets/images/ciab/gallery/0028.jpg' },
  { path: 'assets/images/ciab/gallery/0029.jpg' },
  { path: 'assets/images/ciab/gallery/0030.jpg' },
  { path: 'assets/images/ciab/gallery/0031.jpg' },
  { path: 'assets/images/ciab/gallery/0032.jpg' },
  { path: 'assets/images/ciab/gallery/0033.jpg' },
  { path: 'assets/images/ciab/gallery/0034.jpg' },
  { path: 'assets/images/ciab/gallery/0035.jpg' },
  { path: 'assets/images/ciab/gallery/0036.jpg' },
  { path: 'assets/images/ciab/gallery/0037.jpg' },
  { path: 'assets/images/ciab/gallery/0038.jpg' }
];

@Component({
  selector: 'app-ciab',
  templateUrl: './ciab.component.html',
  styleUrls: ['./ciab.component.sass']
})
export class CiabComponent {

  photoList: Photo[] = PHOTO_LIST;

  constructor() { }

}
