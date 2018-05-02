import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment-ui',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  newMessage: Message = new Message();

  constructor() { }

  ngOnInit() {
  }

  isCommentGood() {
    const comment = this.newMessage.comments.toLowerCase();

    if (comment.includes('fuck') || comment.includes('shit')) {
      return false;
    }

    return true;
  }

}

class Message {
  constructor(
    public user: string = "",
    public comments: string = ""
  ) { }
}
