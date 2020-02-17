import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-sponsor-exhibit',
  templateUrl: './banner-sponsor-exhibit.component.html',
  styleUrls: ['./banner-sponsor-exhibit.component.sass']
})
export class BannerSponsorExhibitComponent {

  constructor(
    private router: Router
  ) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

}
