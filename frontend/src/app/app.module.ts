import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { PrimaryActionsComponent } from './components/primary-actions/primary-actions.component';
import { SecondaryActionsComponent } from './components/secondary-actions/secondary-actions.component';
import { ModalBlogComponent } from './components/modal-blog/modal-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsCommentComponent } from './components/forms-comment/forms-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardBlogComponent } from './components/dashboard-blog/dashboard-blog.component';
import { ListBlogsPreviewComponent } from './components/list-blogs-preview/list-blogs-preview.component';
import { SharedModule } from './components/shared/shared.module';

import { BlogService } from '../app/services/blogs/blog.service';
import { CategoryPipe } from './pipes/category/category.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //DashboardComponent,
    CategoriesComponent,
    BlogPreviewComponent,
    PrimaryActionsComponent,
    SecondaryActionsComponent,
    ModalBlogComponent,
    BlogComponent,
    CommentsComponent,
    ListCommentsComponent,
    CommentComponent,
    FormsCommentComponent,
    DashboardHomeComponent,
    DashboardBlogComponent,
    ListBlogsPreviewComponent,
    CategoryPipe
  ],
  entryComponents: [
    ModalBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
