import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Speaker } from './../../models/speaker.model';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.sass']
})
export class SpeakerComponent {

  @Input()
  speaker: Speaker;

  @Output()
  speakerOpen: EventEmitter<void> = new EventEmitter();

}
