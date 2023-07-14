import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private httpClient:HttpClient) { }

  
  url : string = "http://localhost:8084/api";
  enrollBooks(bookId:number,authorFirstName:String,authorLastName:String,userEmail:String)
  {
    const url = `${this.url}/enroll/${bookId}/${authorFirstName}/${authorLastName}/${userEmail}`;
    return this.httpClient.post(url,null);
  }
}
