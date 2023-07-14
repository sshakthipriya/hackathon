import { Component } from '@angular/core';

import { MyBooksService } from '../service/my-books.service';
import { searchType } from 'src/type/searchType';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent {


  books : searchType[] = []
  constructor(private myBooksService:MyBooksService,private userService:UserService)
  {
      const email = this.userService.getEmail();
       if(email != '' && email != null)
       {
        this.myBooksService.getMyBooks(email).subscribe((response:any)=>
        {
          this.books = response;
        },
        (error) =>
        {
          console.log(error);
        })
       }
        
  }

}
