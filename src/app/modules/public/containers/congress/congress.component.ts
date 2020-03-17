import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.sass']
})
export class CongressComponent {

  constructor(
    private router: Router
  ) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

}
