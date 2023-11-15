import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  afterNextRender,
} from '@angular/core';
import { BlogPostService } from '../Services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostListComponent implements OnInit {
  blogpost$?: Observable<BlogPost[]>;
  constructor(private blogpostservice: BlogPostService) {}
  ngOnInit(): void {
    //get all BlogPost Data from API
    this.blogpost$ = this.blogpostservice.getALlBlogPost();
    console.log(this.blogpost$);
  }
}
