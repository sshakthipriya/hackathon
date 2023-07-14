import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';

import { EnrollService } from '../service/enroll.service';

@Component({
  selector: 'app-enroll-book',
  templateUrl: './enroll-book.component.html',
  styleUrls: ['./enroll-book.component.css']
})
export class EnrollBookComponent {

  constructor(private userService:UserService,private enrollService:EnrollService)
  {

  }

  enrollForm = new FormGroup(
    {
       bookName :new FormControl(),
       authorFirstName:new FormControl(),
       authorLastName:new FormControl(),
    }
  )

  submit()
  {
    const email = this.userService.getEmail();
    const bookName = this.enrollForm.get('bookName')?.value;
    const authorFirstName = this.enrollForm.get('authorFirstName')?.value;
    const authorLastName = this.enrollForm.get('authorLastName')?.value;;
    
    this.enrollService.enrollBooks(bookName,authorFirstName,authorLastName,email).subscribe((response)=>
    {
      alert("Enrolled Successfully");
      console.log(response);
    },
    (error)=>
    {
      console.log(error);
    })
  }

}
