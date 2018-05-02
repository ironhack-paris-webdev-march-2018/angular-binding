import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-select-widget',
  templateUrl: './food-select.component.html',
  styleUrls: ['./food-select.component.css']
})
export class FoodSelectComponent implements OnInit {

  mySelection: string = "";
  selectFeedback: string = "";

  constructor() { }

  ngOnInit() {
  }

  updateFeedback() {
    if (this.mySelection === 'pizza') {
      this.selectFeedback = 'Great choice! 🍕';
    }
    else if (this.mySelection === 'eggplant') {
      this.selectFeedback = 'You sicken me. 🤢';
    }
    else if (!this.mySelection) {
      this.selectFeedback = "";
    }
    else {
      this.selectFeedback = 'That is an okay selection, I guess... 😑';
    }
  }

}
