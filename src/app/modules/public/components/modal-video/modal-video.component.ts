import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.sass']
})
export class ModalVideoComponent implements OnInit, OnDestroy {

  scriptTag: any;

  videoUrl: SafeResourceUrl;

  @Input()
  videoId: string;

  constructor(
    private domSanitizer: DomSanitizer,
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
    this.scriptTag = document.createElement('script');
    this.scriptTag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(this.scriptTag);
  }

  ngOnDestroy(): void {
    this.scriptTag.remove();
  }

}
