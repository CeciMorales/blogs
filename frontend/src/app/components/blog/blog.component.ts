import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from '../../services/blogs/blog.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { createOfflineCompileUrlResolver } from '@angular/compiler';;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 
  public blog: Blog = 
  {
    _id: '',
    title: '',
    description: '',
    category: '',
    image: '',
    comments: [],
    createdAt: '',
    updatedAt: '',
  }

  category: any;
  blogId: string = 'unknown';

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    
    this.getSelectedBlog();
    this.getBlog(this.blogId)

  }

  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog
    })
  }

  getBlog(id: string) {
    this.blogService.getBlog(id).subscribe(
      res => {
        this.blog = res;
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
