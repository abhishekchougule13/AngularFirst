import { Component } from '@angular/core';


@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  firstname: string = "abhi";
  lastname: string = "chougule";
  age: number = 21;
  country: string = "india";
  gender: string = "m";
  receiveletter: boolean = true;

  changedata() {
    this.firstname = "abhi";
    this.lastname = "chougule";
    this.age = 21;
    this.country = "india";
    this.gender = "m";
    this.receiveletter = true;
  }



}
