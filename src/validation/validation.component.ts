import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  formCustomerGroup: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formCustomerGroup = this.formBuilder.group({
      CustomerName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z ]{0,20}$"),



      ]),
      customerid: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),



      ]),
      emailid: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)



      ])


    });

  }

  onformsubmit() {
    this.isSubmitted = true;
    if (this.formCustomerGroup.valid) {
      console.log("User Registration Form Submit", this.formCustomerGroup.value);
    }
  }

}
