import { Component, OnChanges, OnInit} from '@angular/core';
import { BlogService } from '../../services/blogs/blog.service';
import { Blog } from '../../models/blog';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-list-blogs-preview',
  templateUrl: './list-blogs-preview.component.html',
  styleUrls: ['./list-blogs-preview.component.scss']
})
export class ListBlogsPreviewComponent implements OnInit {

  blogs: Blog[] = [];

  blogsFilter: Observable<Blog[]> = new Observable();

  blogs$: Observable<Blog[]>;
  
  category: string = 'all';

  constructor(public blogService: BlogService) { 
    this.blogs$  = new BehaviorSubject<Blog[]>([]);

  }

  ngOnInit(): void {
    this.getBlogs();
    this.getSelectedCategory();
    
  }


  getSelectedCategory() {
    this.blogService.getSelectedCategory$().subscribe(category => {
      this.category = category

    })
  }
  
  getBlogs() {
    this.blogService.setListBlogsBySubject();
    this.blogs$ = this.blogService.getBlogsBySubject();
    
  }


}
