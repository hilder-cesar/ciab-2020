import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { GenericService } from './../../../../services/generic/generic.service';

@Component({
  selector: 'app-keynote-speakers',
  templateUrl: './keynote-speakers.component.html',
  styleUrls: ['./keynote-speakers.component.sass']
})
export class KeynoteSpeakersComponent implements OnInit {

  speakerList: any[];

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.genericService.get('Events/GetAllKeyNoteSpeakers')
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

}
