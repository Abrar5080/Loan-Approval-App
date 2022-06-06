import { Injectable } from '@angular/core';
import { Author } from '../Model/Author';
import { Bookdet } from '../Model/Bookdet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorbookdetService {

  constructor(private http:HttpClient) { }

  getAuthdetail():Observable<Author[]>{
    return this.http.get<Author[]>("assets/Author.json");
  }

  getBookdetail():Observable<Bookdet[]>
  {
    return this.http.get<Bookdet[]>("assets/Bookdet.json");
  }
}
