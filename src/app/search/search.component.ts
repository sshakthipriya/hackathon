import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { SearchService } from '../service/search.service';
import { searchType } from 'src/type/searchType';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent 
{

  constructor(private searchService:SearchService,private userService:UserService)
  {

  }
  
   bookSearch = new FormGroup({
    book: new FormControl(),
    author: new FormControl()
  });
  errormessage:String = "No Books Available";
  check :boolean = false;

  books : searchType[] = [];
  submit(): void {
    this.check = true;
    const bookValue = this.bookSearch.get('book')?.value;
    const authorValue = this.bookSearch.get('author')?.value;
  
    if ((bookValue !== null && bookValue !== '') && (authorValue !== null && authorValue !== '')) {
      this.searchService.getResponseByBookAndAuthor(bookValue,authorValue).subscribe(
        (response: any) => {
          this.books = response;
          console.log("The got books are");
          console.log(this.books);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } 
    
    else if (bookValue !== null && bookValue !== '') 
    {
      this.searchService.getResponseByBook(bookValue).subscribe(
        (response: any) => {
          this.books = response;
          console.log("The got books are");
          console.log(this.books);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } 
    
    else if (authorValue !== null && authorValue !== '') 
    {
      this.searchService.getResponseByAuthor(authorValue).subscribe(
        (response: any) => {
          this.books = response;
          console.log("The got books are");
          console.log(this.books);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  reserveBook(book:searchType):void{
    
    const email = this.userService.getEmail();
    this.searchService.reserveBook(book.bookId,email)
    .subscribe((response) =>
    {
          alert("Succeffuly reserved the book");
    },
    (error)=>
    {
      console.log(error);
    }
    )
  }
  

  
   
   
}
