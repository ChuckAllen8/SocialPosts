import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {
  post: Post;
  hidden: boolean;

  @Output() submitted = new EventEmitter<Post>();
  constructor() {
    this.hidden = true;
    this.post = {title: "", thought: ""};
  }

  displayForm() {
    this.hidden = false;
  }

  ngOnInit(): void {
  }

  submit() {
    if(this.post.title != "" && this.post.thought != "") {
      this.submitted.emit(this.post);
    }
    this.post = {title: "", thought: ""};
    this.hidden = true;
  }

}
