import { Component, OnInit } from '@angular/core';
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
    private genericService: GenericService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.genericService.get('Events/GetAllKeyNoteSpeakers?limit=3')
      .subscribe((response: any) => this.keynoteSpeakerList = response.data);
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

}
