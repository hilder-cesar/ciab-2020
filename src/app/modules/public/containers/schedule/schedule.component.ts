import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic/generic.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  eventList: any[] = [];
  speakerList: any[] = [];

  constructor(
    private genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.genericService.get('Events/GetEvents/92/500')
      .pipe(
        map((item: any) => {
          if (item.palestrantes) {
            let indexOfModerator;
            item.palestrantes.forEach((palestrante, index) => {
              if (palestrante.idStatus === 'Moderador') {
                indexOfModerator = index;
              }
            });
            item.palestrantes.push(item.palestrantes.splice(indexOfModerator, 1)[0]);
            return item;
          } else {
            return item;
          }
        })
      )
      .subscribe((response: any) => this.eventList = response.data);

    this.genericService.post('Events/GetSpeakersUsingFilter', {
      theme: ['Abertura'],
      name: [''],
      page: 1,
      limit: 1,
      eventId: 92
    })
      .subscribe((response: any) => this.speakerList = [response.data[0]]);

  }

  handleScheduleFormChange(value: any): void {
    console.log('value', value);
  }

  handleScheduleSpeakersFormChange(value: any): void {
    console.log('value', value);
  }

}
