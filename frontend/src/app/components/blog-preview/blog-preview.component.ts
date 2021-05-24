import { Component, OnInit, Input} from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {

  }

}
