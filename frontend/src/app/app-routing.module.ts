import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardBlogComponent } from './components/dashboard-blog/dashboard-blog.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  { path: ':id', component: DashboardBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
