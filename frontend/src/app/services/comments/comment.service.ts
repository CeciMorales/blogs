import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  URL_API = 'http://localhost:4000/api/comments';

  // comments
  private comments: Comment[];
  private comment: Comment = {
    idBlog: '',
    idUser: '',
    comment: ''
  }
  private comments$: BehaviorSubject<Comment[]>

  constructor(public http: HttpClient) {
    this.comments = [];
    this.comments$ = new BehaviorSubject<Comment[]>([]);
  }

  createComment(comment: Comment, idBlog: string){
    return this.http.post<Comment>(`${this.URL_API}/${idBlog}`, comment);
    //this.comments = this
  }

  getComments(idBlog: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.URL_API}/${idBlog}`);
  }

  
  getCommentsInSubject(idBlog: string) {
    this.getComments(idBlog).subscribe( comments => {
      this.comments = comments
    });
    this.comments$.next(this.comments);
  }

  getCommentsBySubject(): Observable<Comment[]> {
    return this.comments$.asObservable();
  }

  setListCommentsBySubject(idBlog: string) {
    this.getComments(idBlog).subscribe( comments => {
      this.comments = comments;
      console.log('comments desde setlist comments', this.comments);
      this.comments$.next(this.comments);
    });
    // return this.comments$.asObservable();
  }

  setCommentBySubject(comment_: Comment, idBlog: string) {
    this.createComment(comment_, idBlog).subscribe( comment => {
      this.comments.push(comment_);
      console.log('set new comment desde service', comment_);
      this.comments$.next(this.comments);    
    })
  }



}
