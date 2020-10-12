import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-indiv-post',
  templateUrl: './indiv-post.component.html',
  styleUrls: ['./indiv-post.component.css']
})
export class IndivPostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();
  constructor() { }
  delete() {
    this.deleted.emit(this.post);
  }
  ngOnInit(): void {
  }
}
