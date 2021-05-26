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
 
  comments$: Observable<Comment[]>;
  
  constructor(
    public commentService: CommentService, 
    public blogService: BlogService) {
      this.comments$ = new BehaviorSubject<Comment[]>([]);

  }

  ngOnInit(): void {
    this.getSelectedBlog();
    this.getComments();
  }

  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog

    });
  }

  getComments() {
    this.commentService.setListCommentsBySubject(this.blogId);
    this.comments$ = this.commentService.getCommentsBySubject();
   
  }

}
