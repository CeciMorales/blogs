import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BlogService } from '../../services/blogs/blog.service';
import {FormControl} from '@angular/forms';


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
    'food'
  ];

  selected = new FormControl(0);

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
  }

  changeCategory(category: string) {
    this.blogService.setSelectedCategory(category)
  }


  onTabClick(event: MatTabChangeEvent) {
    console.log(event);
    console.log(event.tab.textLabel);
  }



}
