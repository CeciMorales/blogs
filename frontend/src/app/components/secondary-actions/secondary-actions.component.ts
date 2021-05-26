import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../services/blogs/blog.service';
import { Blog } from '../../models/blog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ModalBlogComponent } from '../modal-blog/modal-blog.component';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-secondary-actions',
  templateUrl: './secondary-actions.component.html',
  styleUrls: ['./secondary-actions.component.scss']
})
export class SecondaryActionsComponent implements OnInit {

  @Input() blog: Blog = {
    _id: '',
    title: '',
    description: '',
    category: '',
    image: '',
    comments: [],
    createdAt: '',
    updatedAt: '',
  }

  constructor(
    public blogService: BlogService, 
    public dialog: MatDialog,
    public router: Router ) { }

  ngOnInit(): void {
  }

  viewBlog() {
    this.router.navigateByUrl(`/${this.blog._id}`);
  }

  updateBlog() {
    const dialogRef = this.dialog.open(ModalBlogComponent, {
      data: this.blog
    });
  }

  deleteBlog() {
    if (confirm(`Are you sure you want to delete ${this.blog.title} blog?`)) {
      if (this.blog._id !== undefined) {
        this.blogService.deleteBlogBySubject(this.blog._id);
      }
    }

  }

}
