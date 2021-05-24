import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blogs/blog.service';
import { Blog } from '../../models/blog';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { tap, delay, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-list-blogs-preview',
  templateUrl: './list-blogs-preview.component.html',
  styleUrls: ['./list-blogs-preview.component.scss']
})
export class ListBlogsPreviewComponent implements OnInit {

  blogs: Blog[] = [];

  blogsFilter: Blog[] = [];

  blogs$: Observable<Blog[]> = new Observable;

  refreshBlogs$ = new BehaviorSubject<boolean>(true);

  category: string = 'all';
  blogId: string = 'list-blog';
  

  constructor(public blogService: BlogService) { 
  }

  ngOnInit(): void {
    this.getBlogs();
    this.getSelectedCategory();
    this.getSelectedBlog();
    
  }
/*
  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blogService.blogs = res;
        // console.log(res);
      },
      err => console.error(err)
    )
  }
  */

  getSelectedCategory() {
    this.blogService.getSelectedCategory$().subscribe(category => {
      this.category = category
      console.log('categoria:', this.category)

      this.getSelectedBlog();
    })
  }

  getBlogs() {
    this.blogs$ = this.blogService.getBlogs();
    //this.blogsFilter = [...this.blogs$];
    //this.blogs$ = this.refreshBlogs$.pipe(switchMap(_ => this.blogService.getBlogs));
  }

  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog
      //console.log('selected blog:', this.blogId)
    })
  }

  /*
  filterBlogsByCategory(category: string) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.categories.includes(category.id);
    })
  }
  */
}
