import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-widget',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  myCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseCount() {
    this.myCount += 1;
  }

  decreaseCount() {
    this.myCount -= 1;
  }

  resetCount() {
    this.myCount = 0;
  }

}
