import { Component, OnInit } from '@angular/core';
import { customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customermodels:Array<customer>=new Array<customer>();

  customermodel:customer=new customer();

  Addcustomer(){
   this.customermodels.push(this.customermodel);
   

  }

}
