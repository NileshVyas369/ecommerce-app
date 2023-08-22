import { Component } from '@angular/core';
import { POSTS } from 'src/app/blogs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  post: any;
  posts = POSTS;
}
