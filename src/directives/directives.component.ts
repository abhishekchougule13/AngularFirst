import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  public product=[
    {name:'nike' ,price:1000, category:"shoes"},
    {name:'samsung' , price:20000, category:"electronics"},
    {name:'iphone' , price:50000, category:"electronics"},
    {name:'bata' , price:200, category:"shoes"}
  ]
public filter='electronics';
  
}
