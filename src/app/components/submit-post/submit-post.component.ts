import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {
  title: string;
  thought: string;
  hidden: boolean;

  @Output() submitted = new EventEmitter<Post>();
  constructor() {
    this.hidden = true;
    this.thought = "";
    this.title = "";
  }

  displayForm() {
    this.hidden = false;
  }

  ngOnInit(): void {
  }

  submit() {
    if(this.title != "" && this.thought != "") {
      this.submitted.emit({title: this.title, thought: this.thought});
    }
    this.title = "";
    this.thought = "";
    this.hidden = true;
  }

}
