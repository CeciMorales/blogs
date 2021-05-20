import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ModalBlogComponent } from '../modal-blog/modal-blog.component';


@Component({
  selector: 'app-primary-actions',
  templateUrl: './primary-actions.component.html',
  styleUrls: ['./primary-actions.component.scss']
})
export class PrimaryActionsComponent implements OnInit {

  constructor(public dialog: MatDialog) {

   }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(ModalBlogComponent);

  }

}
