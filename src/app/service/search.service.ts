import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { searchType } from 'src/type/searchType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpclient:HttpClient) { }

  url : string = "http://localhost:8084/api";

  books:searchType[] = [];

  getResponseByBookAndAuthor(book:String,author:String): Observable<any> 
  {
    const url = `${this.url}/inventory/${book}/${author}`;
    return this.httpclient.get(url);
  }

  getResponseByAuthor(author: string): Observable<any> {
    const url = `${this.url}/inventory/author/${author}`;
    return this.httpclient.get(url);
  }
  

  getResponseByBook(book:String): Observable<any> 
  {
    const url = `${this.url}/inventory/book/${book}`;
    return this.httpclient.get(url);
  }

  reserveBook(bookId:number,userEmail:String)
  {
    const url = `${this.url}/booking/${bookId}/${userEmail}`;
    console.log(this.url);
    return this.httpclient.post(url,null);
  }
}
