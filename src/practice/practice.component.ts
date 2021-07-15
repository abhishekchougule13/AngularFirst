import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent  {
  formstudentgroup:FormGroup;
  isSubmitted:boolean=false;

  constructor(private formbuilder:FormBuilder){
    this.formstudentgroup=this.formbuilder.group({
            studentname:new FormControl('',[
              Validators.required,

            ]),

            

    })
  }


  onformsubmit(){
    this.isSubmitted=true;
    if(this.formstudentgroup.valid){
      console.log("User Registration Form Submit", this.formstudentgroup.value);
    }
  }
  

}
