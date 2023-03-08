import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent {
  @ViewChild('courseForm') form!: ElementRef;

  weeks = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  onSubmit(event: any) {
    event.preventDefault();
    console.log('Submitted');
    console.log(this.getValue());
  }

  getValue() {
    let formValue: any = {};
    let noIncludeDay = '';

    for (let element in (this.form.nativeElement as HTMLFormElement).elements) {
      if (element.indexOf('Value') <= -1) continue;

      const domElement = (this.form.nativeElement as HTMLFormElement).elements[
        element
      ] as HTMLInputElement;

      if (domElement.type === 'checkbox' && !domElement.checked) {
        noIncludeDay = element.split("CheckboxValue")[0];
      }
      
      if (domElement.type !== 'checkbox'  && noIncludeDay !== element.split("Value")[0]) {
        formValue[domElement.name.split('Value')[0]] = domElement.value;
      }
    }

    return formValue;
  }
}
