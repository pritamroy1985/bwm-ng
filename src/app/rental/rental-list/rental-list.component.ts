import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: Array<number> = [1,2,3,4];
  constructor() {
    // TODO constructor need to be implemented
  }
  /**
   * Overriden from OnInit Inteface
   */
  public ngOnInit() {

  }
}