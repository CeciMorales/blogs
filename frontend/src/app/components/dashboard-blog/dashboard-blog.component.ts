import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../../services/blogs/blog.service';

@Component({
  selector: 'app-dashboard-blog',
  templateUrl: './dashboard-blog.component.html',
  styleUrls: ['./dashboard-blog.component.scss']
})
export class DashboardBlogComponent implements OnInit {

  idBlog: string= '';
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.getParamsId();
    //this.changeBlog(this.idBlog)
  }

  getParamsId() {
    this.sub = this.route.params.subscribe(params => {
      this.idBlog = params['id'];
      //console.log('params helou', this.idBlog);
      this.blogService.setSelectedBlog(this.idBlog);
      
   });
  }


  changeBlog(idBlog: string) {
    this.blogService.setSelectedBlog(idBlog)
  }

}
