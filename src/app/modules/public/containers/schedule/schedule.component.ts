import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic/generic.service';
import { map } from 'rxjs/operators';

interface Events {
  theme: string[];
  place: string[];
  date: string;
  page: number;
  limit: number;
  eventId: number;
  lectureId: number[];
  speakerId: number[];
  seal: string[];
}

interface Speakers {
  theme: string[];
  name: string[];
  page: number;
  limit: number;
  eventId: number;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  themeList: any[] = [];
  placeList: any[] = [];
  eventList: any[] = [];
  speakerList: any[] = [];

  day = 23;

  eventsModel: Events = {
    theme: [],
    place: [],
    date: '06/11/2019 00:00:00',
    page: 1,
    limit: 2,
    eventId: 92,
    lectureId: [],
    speakerId: [],
    seal: []
  };

  speakersModel: Speakers = {
    theme: [],
    name: [],
    page: 1,
    limit: 2,
    eventId: 92
  };

  constructor(
    private genericService: GenericService
  ) { }

  private getThemes(): void {
    this.genericService.get('Events/GetThemes')
      .subscribe((response: any) => this.themeList = response.data);
  }

  private getPlaces(): void {
    this.genericService.get('Events/GetPlaces/92')
      .subscribe((response: any) => this.placeList = response.data);
  }

  private getEvents(): void {
    this.genericService.post('Events/GetEventUsingFilter', this.eventsModel)
      .subscribe((response: any) => this.eventList = response.data);
  }

  private getSpeakers(): void {
    this.genericService.post('Events/GetSpeakersUsingFilter', this.speakersModel)
      .subscribe((response: any) => this.speakerList = response.data);
  }

  ngOnInit(): void {
    this.getThemes();
    this.getPlaces();
    this.getEvents();
    this.getSpeakers();
  }

  setDay(day: number): void {
    this.day = day;
  }

  handlescheduleEventsFormChange(value: any): void {
    this.eventsModel.theme = value.themes;
    this.eventsModel.place = value.places;
    this.getEvents();
  }

  handleScheduleSpeakersFormChange(value: any): void {
    this.speakersModel.theme = value.themes;
    this.speakersModel.name = value.letters;
    this.getSpeakers();
  }

}
