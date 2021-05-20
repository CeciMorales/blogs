import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  URL_API = 'http://localhost:4000/api/blogs';

  blogs: Blog[] = [];

  constructor(private http: HttpClient) { }

  // metodo
  getBlogs() {
    return this.http.get<Blog[]>(this.URL_API);
  }
}
