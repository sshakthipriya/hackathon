import { Injectable } from '@angular/core';
import { searchType } from 'src/type/searchType';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {

  constructor(private userService:UserService,private httpClient:HttpClient) { }

  url : string = "http://localhost:8084/api";
  books:searchType[] = [];


  getMyBooks(email:String):Observable<any>
  {
    const url = `${this.url}/inventory/getmybooks/${email}`;
    return this.httpClient.get(url);
  }
}
