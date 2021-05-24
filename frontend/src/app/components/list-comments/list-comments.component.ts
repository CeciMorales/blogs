import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comments/comment.service';
import { BlogService } from '../../services/blogs/blog.service';
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

  blogId: string = '';
  //comments: Comment[] = []; 
  //comments: any;
  // public todoitems$: Observable<Todo[]>;
  //comments$: Observable<any> = new Observable();

  comments$: Observable<Comment[]>;
  //comments$: BehaviorSubject<Comment[]>

  //comments$: Observable<any>;
  constructor(
    public commentService: CommentService, 
    public blogService: BlogService) {
      this.comments$ = new BehaviorSubject<Comment[]>([]);

  }

  ngOnInit(): void {
    this.getSelectedBlog();
    this.getComments();
    //console.log('comments aiudaaa', this.comments);
  }

  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog
      //console.log('este es el id desde blog desde comments', this.blogId)

    });
  }

  /*
  getComments() {
    this.commentService.getComments(this.blogId).subscribe(comments => {
      this.comments = comments;
      console.log(this.comments)
    });
  }
  */

  getComments() {
    this.commentService.setListCommentsBySubject(this.blogId);
    this.comments$ = this.commentService.getCommentsBySubject();
    /*
    this.commentService.getCommentsBySubject().subscribe( comments => {
      this.comments = comments;
      console.log('get commetns desde list commetns!!!!!!!', this.comments)
    })
    */
  }
/*
    this.commentService.setListCommentsBySubject(this.blogId).subscribe( comments => {
      comments = comments;
      console.log('get commetns desde list commetns!!!!!!!', comments)
    })
    
  }
  */
}
