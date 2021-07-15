import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  public products:Array<any>=[
    {pid:101,pname:'laptop',pcost:10000},
    { pid:102,pname:'mobile',pcost:2000},
    { pid:103,pname:'bike',pcost:77000},
    { pid:104,pname:'iphone',pcost:60000}

  ];

 

}
