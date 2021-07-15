import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input() pid: any;
  @Input() pname: any;
  @Input() pcost: any;

  
}


