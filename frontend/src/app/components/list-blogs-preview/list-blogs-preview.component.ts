import { Component, OnChanges, OnInit} from '@angular/core';
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

  blogsFilter: Observable<Blog[]> = new Observable();

  blogs$: Observable<Blog[]>;
  

  //refreshBlogs$ = new BehaviorSubject<boolean>(true);

  category: string = 'all';
  //category: Observable<string> = new Observable();
  blogId: string = 'list-blog';

  breakpoint: any;
  

  constructor(public blogService: BlogService) { 
    this.blogs$  = new BehaviorSubject<Blog[]>([]);

  }

  ngOnInit(): void {
    this.getBlogs();
    this.getSelectedCategory();
    this.filterByCategory();
    //this.getSelectedBlog();
    
  }

  ngOnChanges(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

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
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

  
  getSelectedCategory() {
    this.blogService.getSelectedCategory$().subscribe(category => {
      this.category = category
      console.log('categoria:', this.category)

    })
  }
  

  getBlogs() {
    this.blogService.setListBlogsBySubject();
    this.blogs$ = this.blogService.getBlogsBySubject();
    //this.blogs$ = this.blogService.getBlogs();
    //this.blogsFilter = [...this.blogs$];
    //this.blogs$ = this.refreshBlogs$.pipe(switchMap(_ => this.blogService.getBlogs));
  }

  filterByCategory() {
    if (this.category == 'all') {
      this.blogsFilter = this.blogs$;
    } else {
      this.blogs$.forEach(blog => {
        console.log("adentro del foreach", blog);
      });
    }
  }

  /*
  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog
      //console.log('selected blog:', this.blogId)
    })
  }*/

  /*
  filterBlogsByCategory(category: string) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.categories.includes(category.id);
    })
  }
  */

  /**FUNCION QUE SIRVE DE GET BLOGS
   * 
   *  getBlogs() {
    this.blogs$ = this.blogService.getBlogs();
    //this.blogsFilter = [...this.blogs$];
    //this.blogs$ = this.refreshBlogs$.pipe(switchMap(_ => this.blogService.getBlogs));
  }

   */
}
