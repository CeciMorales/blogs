import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-secondary-actions',
  templateUrl: './secondary-actions.component.html',
  styleUrls: ['./secondary-actions.component.scss']
})
export class SecondaryActionsComponent implements OnInit {

  @Input() idBlog: String = '';

  constructor() { }

  ngOnInit(): void {
    console.log("idBlog", this.idBlog);
  }

  deleteBlog() {
    if (confirm('Are you sure you want to delete this blog?')) {
      
    }

  }

  updateBlog() {

  }

}
