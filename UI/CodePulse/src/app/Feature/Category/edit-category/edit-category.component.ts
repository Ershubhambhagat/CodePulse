import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { Getcategory } from '../Models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramSubscription?: Subscription;
  categorys: Getcategory | null = null;

  constructor(
    private rought: ActivatedRoute,
    private categoryService: CategoryService
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
  }
  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }
}
