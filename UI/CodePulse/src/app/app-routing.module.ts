import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Feature/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Feature/Category/add-category/add-category.component';
import { EditCategoryComponent } from './Feature/Category/edit-category/edit-category.component';
import { BlogPostListComponent } from './Feature/Blog-Post/blog-post-list/blog-post-list.component';
import { AddBlogPostComponent } from './Feature/Blog-Post/add-blog-post/add-blog-post.component';

const routes: Routes = [
  {
    path: 'admin/category',
    component: CategoryListComponent,
  },
  {
    path: 'admin/category/add',
    component: AddCategoryComponent,
  },
  {
    path: 'admin/category/:id',
    component: EditCategoryComponent,
  },
  {
    path: 'admin/blogpost',
    component: BlogPostListComponent,
  },
  {
    path: 'admin/blogpost/add',
    component: AddBlogPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
