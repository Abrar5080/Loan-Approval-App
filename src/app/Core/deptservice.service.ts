import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dept } from '../Model/Dept';

@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {

  constructor(private http:HttpClient) { }

  getalldept():Observable<Dept[]>
  {
    return this.http.get<Dept[]>("https://localhost:44345/api/Dept");
  }
}
