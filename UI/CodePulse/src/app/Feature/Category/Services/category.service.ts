import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  Addcategory(model:AddCategoryRequest) :Observable<void>{
    return this.http.post<void>('https://localhost:7051/api/CodePulse',model)


  }

}
