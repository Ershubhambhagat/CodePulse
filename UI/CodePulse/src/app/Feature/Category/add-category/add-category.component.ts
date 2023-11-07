import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request-model';
import {CategoryService} from '..//Services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCategoryComponent {
model:AddCategoryRequest;
/**
 *
 */
constructor(private CategoryService:categoryService.CategoryService) {
  this.model={
    Name :'',
    UrlHandle:''

  };
  

}

  onFormSubmit(){
     console.log(this.model)
     this.categoryService.Addcategory(this.model)
     .subscribe({ 
      next:()=>{
console.log("sucess ")
     }
       
     })
  }

}
