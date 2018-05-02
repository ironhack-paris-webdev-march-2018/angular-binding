import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-switcher-thing',
  templateUrl: './image-switcher.component.html',
  styleUrls: ['./image-switcher.component.css']
})
export class ImageSwitcherComponent implements OnInit {

  images: Array<string> = [
    'https://media.giphy.com/media/IMDSOJvLn9RaU/giphy.gif',
    'https://media.giphy.com/media/xUPGcDSgYCBXVFvHQ4/giphy.gif',
    'https://media.giphy.com/media/wjK3YnjoQf0go/giphy.gif',
    'https://media.giphy.com/media/8R7GUZWaydcOY/giphy.gif',
    'https://media.giphy.com/media/zcLcgT7NKQAFy/giphy.gif'
  ];

  currentImage: string;
  index: number;

  constructor() { }

  ngOnInit() {
    this.index = Math.floor(Math.random() * this.images.length);
    this.currentImage = this.images[this.index];
  }

  changeTheImage() {
    this.index += 1;
    if (this.index === this.images.length) {
      this.index = 0;
    }
    // Pro way
    // this.index %= this.images.length

    this.currentImage = this.images[this.index];
  }

}
