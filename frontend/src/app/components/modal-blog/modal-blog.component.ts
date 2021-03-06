import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blogs/blog.service';
import { Blog } from '../../models/blog';
import { Observable, Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-blog',
  templateUrl: './modal-blog.component.html',
  styleUrls: ['./modal-blog.component.scss']
})
export class ModalBlogComponent implements OnInit {

  blog$: Observable<Blog> = new Observable;
  blogReceived: Blog = {
    title: '',
    description: '',
    category: '',
    image: '',   
  }

  constructor(
    public blogService: BlogService,
    @Inject(MAT_DIALOG_DATA) public data: Blog,
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<ModalBlogComponent>
    ) {
      dialogRef.disableClose = true;
      this.blogReceived = data;

   }

  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  addBlog() {
    this.blogForm.markAllAsTouched();
    this.blogService.setBlogBySubject(this.blogForm.value);
    
  }

  editBlog() {
    this.blogForm.markAllAsTouched();
    console.log('datos a editar');
    console.log("forms value para edit", this.blogForm.value);
    if (this.blogReceived._id !== undefined) {
      this.blogService.editBlogBySubject(this.blogForm.value, this.blogReceived._id);
    }
  }


}
