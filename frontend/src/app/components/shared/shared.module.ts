import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material ui
// add material
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
