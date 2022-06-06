import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  getprodetail():Observable<Product>{
    return this.http.get<Product>("assets/Product.json");
  }

  getallprodetail():Observable<Product[]>
  {
    return this.http.get<Product[]>("assets/AllProduct.json");
  }
}
