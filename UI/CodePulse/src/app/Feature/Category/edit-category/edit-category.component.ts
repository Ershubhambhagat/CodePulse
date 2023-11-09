import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { Getcategory } from '../Models/category.model';
import { updateCategoryRequest } from '../Models/Update-category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramSubscription?: Subscription;
  editCategorysubscription?: Subscription;
  categorys: Getcategory | null = null;

  constructor(
    private rought: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.rought.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        console.log(this.id);
        //get data from API using this id
        if (this.id) {
          this.categoryService.getCategoryById(this.id).subscribe({
            next: (responce) => {
              this.categorys = responce;
              console.log(this.categorys);
            },
          });
        }
      },
    });
  }
  onFormsubmit(): void {
    console.log(this.categorys);

    const updateCategoryRequest: updateCategoryRequest = {
      name: this.categorys?.name ?? '',
      UrlHandle: this.categorys?.UrlHandle ?? '',
    };
    //Pass this obj to  Service
    if (this.id) {
      this.editCategorysubscription = this.categoryService
        .updateCategory(this.id, updateCategoryRequest)
        .subscribe({
          next: (responce) => {
            this.router.navigateByUrl('admin/category ');
          },
        });
    }
  }
  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editCategorysubscription?.unsubscribe();
  }
}
