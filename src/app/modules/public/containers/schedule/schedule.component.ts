import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic/generic.service';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  eventsDone = false;
  eventsModel: Events = {
    theme: [],
    place: [],
    date: '2019-06-11',
    page: 1,
    limit: 10,
    eventId: 92,
    lectureId: [],
    speakerId: [],
    seal: []
  };

  speakersDone = false;
  speakersModel: Speakers = {
    theme: [],
    name: [],
    page: 1,
    limit: 10,
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

  getEvents(push?: boolean): void {
    if (push === true) {
      this.eventsModel.page++;
    } else {
      this.eventsModel.page = 1;
    }
    this.genericService.post('Events/GetEventUsingFilter', this.eventsModel)
      .pipe(
        map((response) => {
          if (response.data.length % 10 !== 0 || response.data.length === 0) {
            this.eventsDone = true;
          }
          return response.data.map((event) => {
            event.data = DateTime.fromISO(event.data);
            // tslint:disable-next-line: max-line-length
            event.hora_Inicio = DateTime.fromFormat((event.data as DateTime).toFormat('dd/MM/yyyy') + ' ' + event.hora_Inicio, 'dd/MM/yyyy HH:mm:ss');
            // tslint:disable-next-line: max-line-length
            event.hora_Fim = DateTime.fromFormat((event.data as DateTime).toFormat('dd/MM/yyyy') + ' ' + event.hora_Fim, 'dd/MM/yyyy HH:mm:ss');
            return event;
          });
        })
      )
      .subscribe((data: any) => {
        this.eventList = push === true ? [...this.eventList, ...data] : data;
      });
  }

  getSpeakers(push?: boolean): void {
    if (push === true) {
      this.speakersModel.page++;
    } else {
      this.speakersModel.page = 1;
    }
    this.genericService.post('Events/GetSpeakersUsingFilter', this.speakersModel)
      .pipe(
        map((response) => {
          if (response.data.length % 10 !== 0 || response.data.length === 0) {
            this.speakersDone = true;
          }
          return response.data.map((speaker) => {
            speaker.lectures = speaker.lectures.map((lecture) => {
              lecture.lectureDate = DateTime.fromFormat(lecture.lectureDate, 'dd/MM/yyyy HH:mm:ss');
              // tslint:disable-next-line: max-line-length
              lecture.startTime = DateTime.fromFormat((lecture.lectureDate as DateTime).toFormat('dd/MM/yyyy') + ' ' + lecture.startTime, 'dd/MM/yyyy HH:mm:ss');
              // tslint:disable-next-line: max-line-length
              lecture.finishTime = DateTime.fromFormat((lecture.lectureDate as DateTime).toFormat('dd/MM/yyyy') + ' ' + lecture.finishTime, 'dd/MM/yyyy HH:mm:ss');
              return lecture;
            });
            speaker.lectures.sort((item, next) => item.lectureDate.ts - next.lectureDate.ts);
            speaker.lecturesByDay = [];
            speaker.lectures.forEach((item) => {
              if (speaker.lecturesByDay[item.lectureDate]) {
                speaker.lecturesByDay[item.lectureDate].push(item);
              } else {
                speaker.lecturesByDay[item.lectureDate] = [item];
              }
            });
            return speaker;
          });
        })
      )
      .subscribe((data: any) => {
        this.speakerList = push === true ? [...this.speakerList, ...data] : data;
      });
  }

  ngOnInit(): void {
    this.getThemes();
    this.getPlaces();
    this.getEvents();
    this.getSpeakers();
  }

  setDate(date: string): void {
    this.eventsModel.date = date;
    this.getEvents();
  }

  handlescheduleEventsFormChange(value: any): void {
    this.eventsModel.theme = value.themes;
    this.eventsModel.place = value.places;
    this.getEvents();
  }

  handleScheduleSpeakersFormChange(value: any): void {
    this.speakersModel.theme = value.themes;
    this.speakersModel.name = value.letters;
    this.speakersModel.page = 1;
    this.getSpeakers();
  }

}
