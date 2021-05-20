import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blogs/blog.service';

@Component({
  selector: 'app-modal-blog',
  templateUrl: './modal-blog.component.html',
  styleUrls: ['./modal-blog.component.scss']
})
export class ModalBlogComponent implements OnInit {

  constructor(public blogService: BlogService) { }

  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  addBlog() {
    console.log('added blog');
    console.log("forms value", this.blogForm.value);
    //this.blogService.selectedBlog = this.blogForm.value;
    //console.log('selected blog', this.blogService.selectedBlog);
    this.blogService.createBlog(this.blogForm.value).subscribe(
      res => {
        this.blogService.getBlogs();
      },
      err => console.error(err)
    );

    

  }

}
