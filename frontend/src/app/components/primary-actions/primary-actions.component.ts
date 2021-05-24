import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ModalBlogComponent } from '../modal-blog/modal-blog.component';
import { BlogService } from '../../services/blogs/blog.service';
import { Blog } from '../../models/blog';



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
    const dialogRef = this.dialog.open(ModalBlogComponent, {
      /*data: {
        title: 'titulo',
        category: 'categoria',
        description: 'descripcion',
        image: 'imagen'
      }*/
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('results', result);
    });
    
  }


}
