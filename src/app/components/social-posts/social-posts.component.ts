import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[];
  constructor() {
    this.posts = [
      {title: "Post 1", thought: "Thought for Post 1"},
      {title: "Post 2", thought: "Thought for Post 2"}
    ];
  }

  onDelete(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

  onSubmit(post: Post) {
    this.posts.push(post);
  }

  ngOnInit(): void {
  }

}
