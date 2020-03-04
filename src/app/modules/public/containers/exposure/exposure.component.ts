import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic/generic.service';
import { Router } from '@angular/router';

interface ExhibitorList {
  colOne: any[];
  colTwo: any[];
  colThree: any[];
}

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html',
  styleUrls: ['./exposure.component.sass']
})
export class ExposureComponent implements OnInit {

  exhibitorList: ExhibitorList = {
    colOne: [],
    colTwo: [],
    colThree: []
  };

  constructor(
    private genericService: GenericService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.genericService.get('Expositor/GetAll')
      .subscribe((response: any) => {
        const itemsPerCol = Math.trunc(response.data.length / 3);
        let itemsLeft = response.data.length % 3;

        this.exhibitorList.colOne = [...response.data];
        this.exhibitorList.colTwo = [...response.data];
        this.exhibitorList.colThree = [...response.data];

        this.exhibitorList.colOne = this.exhibitorList.colOne.splice(0, itemsPerCol + (itemsLeft ? 1 : 0));
        itemsLeft--;

        this.exhibitorList.colTwo = this.exhibitorList.colTwo.splice(itemsPerCol, itemsPerCol + (itemsLeft ? 1 : 0));
        itemsLeft--;

        this.exhibitorList.colThree = this.exhibitorList.colThree.splice(itemsPerCol * 2, itemsPerCol);
      });
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

}
