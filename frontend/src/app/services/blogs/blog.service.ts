import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../../models/blog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  URL_API = 'http://localhost:4000/api/blogs';

  /*
  selectedBlog: Blog = 
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
  */
  // subject -> lanzar o emitir el evento, para que todos los que se suscriban a el
  // se enteren si ha habido un cambio
  //private blogs$ = new Subject<Blog[]>();

  // categorias
  private selectedCategory: string;
  private selectedCategory$: Subject<string>;

  // id blog
  private selectedBlog: string;
  //private selectedBlog$: Subject<string>;
  private selectedBlog$: BehaviorSubject<string>;

  private blogs: Blog[];
  private blogs$: BehaviorSubject<Blog[]>

  constructor(private http: HttpClient) {
    //his.blogs$ = new Subject();
    this.selectedCategory = 'all';
    this.selectedCategory$ = new Subject();

    this.selectedBlog = 'not selected';
    //this.selectedBlog$ = new Subject();
    // subject normal no funciona con routing
    // si usas routing mejor behaivior subject <3
    this.selectedBlog$ = new BehaviorSubject<string>('');

    this.blogs = [];
    this.blogs$ = new BehaviorSubject<Blog[]>([]);

  }


  setSelectedCategory(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    // avisar que selected category ha cambiado a todos los suscritos
    this.selectedCategory$.next(this.selectedCategory);
  }

  getSelectedCategory$(): Observable<string> {
    // as observable hace que sea observable y que otros se puedan suscribir a el
    return this.selectedCategory$.asObservable();
  }

  setSelectedBlog(selectedBlog: string) {

    this.selectedBlog = selectedBlog;
    //console.log('desde service', this.selectedBlog);
    // avisar que selected category ha cambiado a todos los suscritos
    this.selectedBlog$.next(this.selectedBlog);
  }

  getSelectedBlog$(): Observable<string> {
    // as observable hace que sea observable y que otros se puedan suscribir a el
    //console.log('hola', this.selectedBlog);
    return this.selectedBlog$.asObservable();
  }

  // metodo : Observable<Blog[]>
  getBlogs(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.URL_API);
    // this.persona$.asObservable()
  }

  getBlog(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.URL_API}/${id}`);
  }

  createBlog(blog: Blog){
    return this.http.post<Blog>(this.URL_API, blog);
    // this.blogs$.next(this.blogs)
    // a todos los componentes que estan suscritos, avisarles y enviar el array
  }

  deleteBlog(id: string) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  editBlog(blog: Blog, id: string) {
    return this.http.put(`${this.URL_API}/${id}`, blog);
    
  }

  // obtiene bsubjects como observable
  getBlogsBySubject(): Observable<Blog[]> {
    return this.blogs$.asObservable();
  }


  // asigna todos los blogs a bsubject
  setListBlogsBySubject() {
    this.getBlogs().subscribe( blogs => {
      this.blogs = blogs;
      console.log('set list blogs en service', this.blogs);
      this.blogs$.next(this.blogs);
    })
  }

  // crea un blog 
  setBlogBySubject(blog: Blog) {
    this.createBlog(blog).subscribe( blog => {
      this.blogs.push(blog);
      console.log('set new comment desde service', blog);
      this.blogs$.next(this.blogs);
    })
  }

  // edita un blog
  editBlogBySubject(blog: Blog, id: string) {
    this.editBlog(blog, id).subscribe( blog => {
      let blogEdited = blog as Blog;
      console.log('como blog', blogEdited);
      let index = this.blogs.findIndex(x => x._id === id);
      //this.blogs[index] = blogEdited;
      this.blogs.splice(index,1,blogEdited);
      console.log('edited', this.blogs);
      this.blogs$.next(this.blogs);
    })
  }

  deleteBlogBySubject(id: string) {
    this.deleteBlog(id).subscribe( blog => {
      let index = this.blogs.findIndex(x => x._id === id);
      this.blogs.splice(index, 1);
      this.blogs$.next(this.blogs);
      
    })
  }







}
