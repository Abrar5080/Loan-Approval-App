import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Prodet } from '../Model/Prodet';

@Injectable({
  providedIn: 'root'
})
export class ProdetService {

  constructor(private http:HttpClient) { }

  getprodet():Observable<Prodet[]>
  {
    return this.http.get<Prodet[]>("https://localhost:44316/api/Product");
  }
}
