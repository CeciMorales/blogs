import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BlogService } from '../../services/blogs/blog.service';
import {FormControl} from '@angular/forms';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


  categories: Array<string> = [
    'all', 
    'lifestyle',
    'travel',
    'business',
    'food',
    'work'
  ];

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
  }

  changeCategory(category: string) {
    this.blogService.setSelectedCategory(category);
  }
}
