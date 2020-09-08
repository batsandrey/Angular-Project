import { Component } from '@angular/core';

export interface Post{
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularApp';

  posts: Post[] = [
    {title: 'Want to learn Angular components', text: 'Learn Components', id:1},
    {title: 'Next block', text: 'components', id:2}
  ]

  updatePosts(post: Post){
    this.posts.unshift(post);
  }
}
