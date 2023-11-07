import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Getcategory } from '../Models/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  //#region Create
  Addcategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(
      `${environment.apiBaseUrl}/api/CodePulse`,
      model
    );
  }
  //#endregion

  //#region  Get All
  getAllCategory(): Observable<Getcategory[]> {
    return this.http.get<Getcategory[]>(
      `${environment.apiBaseUrl}/api/Codepulse`
    );
  }

  //#endregion
}
