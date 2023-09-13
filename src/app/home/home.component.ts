import { Component } from '@angular/core';
import { POSTS } from 'src/app/blogs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  post: any;
  posts = POSTS;
}
