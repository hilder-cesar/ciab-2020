import { Component, OnInit } from '@angular/core';
import { GenericService } from './../../../../services/generic/generic.service';
import { APP_LOCALE_ID } from './../../../../app-locale';

@Component({
  selector: 'app-keynote-speakers',
  templateUrl: './keynote-speakers.component.html',
  styleUrls: ['./keynote-speakers.component.sass']
})
export class KeynoteSpeakersComponent implements OnInit {

  collection: any[];

  constructor(
    private genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.genericService.get('Events/GetAllKeyNoteSpeakers')
      .subscribe((response: any) => {
        if (APP_LOCALE_ID === 'en') {
          response.data.map((item) => {
            item.function = item.function_en;
            item.miniCV = item.miniCVEn;
          });
        }
        this.collection = response.data;
      });
  }

}
