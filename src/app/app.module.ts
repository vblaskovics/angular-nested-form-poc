import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaysFormComponent } from './components/course-form/days-form/days-form.component';
import { DayFormComponent } from './components/course-form/days-form/day-form/day-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    DaysFormComponent,
    DayFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
