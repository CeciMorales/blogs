import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../../models/blog';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  URL_API = 'http://localhost:4000/api/blogs';

  blogs: Blog[] = [];

  selectedBlog: Blog = {
    title: '', 
    description: '', 
    category: '', 
    image: '',
  };

  constructor(private http: HttpClient) { }

  // metodo : Observable<Blog[]>
  getBlogs(){
    return this.http.get<Blog[]>(this.URL_API);
  }

  createBlog(blog: Blog) {
    return this.http.post(this.URL_API, blog);

  }
}
