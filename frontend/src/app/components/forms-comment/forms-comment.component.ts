import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService} from '../../services/blogs/blog.service';
import { CommentService } from '../../services/comments/comment.service'

@Component({
  selector: 'app-forms-comment',
  templateUrl: './forms-comment.component.html',
  styleUrls: ['./forms-comment.component.scss']
})
export class FormsCommentComponent implements OnInit {

  constructor(public blogService: BlogService, public commentService: CommentService) { }

  commentForm = new FormGroup({
    idUser: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  blogId: string = '';

  ngOnInit(): void {
    this.getSelectedBlog();
  }

  getSelectedBlog() {
    this.blogService.getSelectedBlog$().subscribe(blog => {
      this.blogId = blog
      console.log('este es el id desde blog desde form comments', this.blogId)
    });
  }

  addComment() {
    this.commentForm.markAllAsTouched();

    let result = this.commentForm.value;
    result = {...result, idBlog: this.blogId}
   
    this.commentService.setCommentBySubject(result, this.blogId);
    if (this.commentForm.valid) {
      this.commentForm.reset();
    }
  }

}
