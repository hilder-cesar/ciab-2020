import { Component, OnInit } from '@angular/core';
import { GenericService } from './../../../../services/generic/generic.service';

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
      .subscribe((response: any) => this.collection = response.data);
  }

}
