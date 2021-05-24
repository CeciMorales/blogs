import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from '../../services/blogs/blog.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';import { createOfflineCompileUrlResolver } from '@angular/compiler';
;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  //@Input() idBlog: string = '';

  
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

 // blog: any;
  category: any;
  blogId: string = 'unknown'

  constructor(public blogService: BlogService) { 
    //this.blogId = this.blogService.getSelectedBlog();
  }
  ngOnInit(): void {
    
    this.getSelectedBlog();
    //this.getSelectedCategory();
    this.getBlog(this.blogId)
    
    //this.getSelectedBlog();
    //this.getSelectedCategory();
  }

  /*
  getBlogId() {
    this.blogService.getSelectedBlog().subscribe(blog => {
      this.blogId = blog;
      
    })
  }*/

  /*
  getSelectedBlog() {/*
    this.blogService.getSelectedBlog().subscribe(blog => {
      this.blogId = blog
      console.log('entra??')
    })
    console.log('funciona');
    this.blogService.getSelectedBlog().subscribe(blog => {
      console.log('adios', blog);
    })
  }
  */

  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog
      //console.log('este es el id desde blog', this.blogId)

    })
  }

   
  getSelectedCategory() {
    this.blogService.getSelectedCategory$().subscribe(category => {
      this.category = category
      //console.log('entraaa  blogs aahh?')
      //console.log('categoria:', this.category)
    })
  }


  getBlog(id: string) {
    this.blogService.getBlog(id).subscribe(
      res => {
        //this.blogService.selectedBlog = res;
        this.blog = res;
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
