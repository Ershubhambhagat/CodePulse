import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Getcategory } from '../Models/category.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  categories$?  : Observable<Getcategory[]>;
  id: string | null = null;
  paramSubscription?: Subscription;
  

  
 
  constructor(private categoryService: CategoryService,
    private rought: ActivatedRoute,
    private router: Router

    ) {}

  ngOnInit(): void {
    this.categories$=this.categoryService.getAllCategory();
     console.log(this.categories$.forEach(element => {console.log(element)}))
    
    // .subscribe({
    //   next: (response) => {
    //     this.categories = response;
    //     console.log(this.categories)
    //   },
    // });
  }
  // onDelete(event):void{this.paramSubscription=this.rought.paramMap.subscribe({
  //   next:(res)=>{
  //     this.id=res.get('id')
  //   }
  // })
  // if(this.id){
  //   this.categoryService.deleteCategory(this.id).subscribe({
  //     next:(responce)=>{
  //       console.warn(this.id,"Deleted Sucessfully")
  //     }
  //   })

  // }

  // }
  onDelete(event:string):void{
    this.categoryService.deleteCategory(event).subscribe({
      next:(res)=>{alert(" Deleted Sucessfully "),
      console.log("Id No",event,"Deletd Sucessfully");
      
      this.router.navigateByUrl('admin/category')
        

      }
    })

  }
  
}
