import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keynote-speaker',
  templateUrl: './keynote-speaker.component.html',
  styleUrls: ['./keynote-speaker.component.sass']
})
export class KeynoteSpeakerComponent {

  @Input()
  photo: string;

  @Input()
  name: string;

  @Input()
  description: string;

}
