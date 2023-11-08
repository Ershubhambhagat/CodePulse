import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request-model';
import { CategoryService } from '..//Services/category.service';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryComponent implements OnDestroy{
  model: AddCategoryRequest;
  private addCategorysubscription?:Subscription
  /**
   *
   */
  constructor(private CategoryService: CategoryService,private router:Router) {
    this.model = {
      Name: '',
      UrlHandle: '',
    };
  }
 

  onFormSubmit() {
    console.log(this.model);
    this.addCategorysubscription=this.CategoryService.Addcategory(this.model).subscribe({
      next: () => {
        alert('Success ');
        this.router.navigateByUrl('/admin/category')
      },
      
    });
    


    
  }
  ngOnDestroy(): void {
    this.addCategorysubscription?.unsubscribe(); 

  }
}
