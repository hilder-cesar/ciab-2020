import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { GenericService } from './../../../../services/generic/generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.sass']
})
export class CongressComponent implements OnInit {

  keynoteSpeakerList: any[];

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private genericService: GenericService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.genericService.get('Events/GetAllKeyNoteSpeakers?limit=3')
      .subscribe((response: any) => {
        if (this.localeId === 'en') {
          response.data.map((item) => {
            item.function = item.function_en;
            item.miniCV = item.miniCVEn;
          });
        }
        this.keynoteSpeakerList = response.data;
      });
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

}
