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
      {title: "Shower Thoughts", thought: ".jar sounds cool"},
      {title: "Real Thoughts", thought: "Java is not cool"},
      {title: "Omega boss", thought: "It's a boss, not like Alpha Boss, but cooler. More Omega-ey"},
      {title: "Awesome Title", thought: "Awesome thought, awesome!"},
      {title: "Yo-De-Le-He-Ho", thought: "Yoddling is the music of music"},
      {title: "Double Bass", thought: "There is only one way to do bass, double bass."},
      {title: "Drone Money Maker", thought: "Buy a new roof, use a drone to video record the people installing it. Sell the video to the roof company for more than the roof."},
      {title: "Scratch That", thought: "The company can buy a drone and do it themselves for cheaper."},
      {title: "Market Economy", thought: "People charge too much for things."}
    ];
  }

  onDelete(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
  }

  ngOnInit(): void {
  }

}
