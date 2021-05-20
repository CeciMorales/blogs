import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blogs/blog.service';


@Component({
  selector: 'app-list-blogs-preview',
  templateUrl: './list-blogs-preview.component.html',
  styleUrls: ['./list-blogs-preview.component.scss']
})
export class ListBlogsPreviewComponent implements OnInit {

  

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
    
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blogService.blogs = res;
        // console.log(res);
      },
      err => console.error(err)
    )
  }

}
