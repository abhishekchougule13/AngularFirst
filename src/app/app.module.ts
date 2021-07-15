import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from 'src/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TwoWayBindingComponent } from '../two-way-binding/two-way-binding.component';
import { DirectivesComponent } from 'src/directives/directives.component';
import { ParentComponent } from 'src/parent/parent.component';
import { ChildComponent } from 'src/child/child.component';
import { CustomerComponent } from 'src/customer/customer.component';
import { ValidationComponent } from 'src/validation/validation.component';
import { PracticeComponent } from 'src/practice/practice.component';










@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    CustomerComponent,
    ValidationComponent,
    PracticeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PracticeComponent]
})
export class AppModule { }
