import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../Services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent {
  model:AddBlogPost;
   
  constructor( private blogPostService:BlogPostService ,private router:Router) {
    this.model={   
      title:'.net',
      shortDescription:'Dotnet is Programming Language',
      content:'Programming',
      featuredImageUrl:'dotnet.html',
      urlHandle:'dotnet.html',
      author:'shubham',
      publishDate:new Date(),
      isVisible:true
    }
  }
  onFormSubmit():void{
    console.log('1Model',this.model);    
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next:(responce)=>{
        this.model=responce
        this.router.navigateByUrl('/admin/blogpost');

      }
    })
  }

}
