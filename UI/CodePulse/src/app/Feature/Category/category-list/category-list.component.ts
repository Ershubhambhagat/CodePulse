import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Getcategory } from '../Models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  categories$?  : Observable<Getcategory[]>;
  
 
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories$=this.categoryService.getAllCategory();
     console.log(this.categories$)
    
    // .subscribe({
    //   next: (response) => {
    //     this.categories = response;
    //     console.log(this.categories)
    //   },
    // });
  }
}
