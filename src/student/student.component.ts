import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  alert: boolean = false;
  email: string = '';
  password: string = '';
  router: any;


  Login() {
    if (this.email == "admin" && this.password=='admin') {
     alert("login sucessfully");
     this.router.navigate(['/student']);
    
      
    }
      else{
        alert("password is wrong");
      }
    }
}
