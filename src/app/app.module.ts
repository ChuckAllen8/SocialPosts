import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './components/social-posts/social-posts.component';
import { IndivPostComponent } from './components/indiv-post/indiv-post.component';
import { SubmitPostComponent } from './components/submit-post/submit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    IndivPostComponent,
    SubmitPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
