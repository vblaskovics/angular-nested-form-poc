import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NonNullableFormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent {
  @ViewChild('courseForm') form!: ElementRef;

  fb = inject(NonNullableFormBuilder);

  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  courseForm = this.fb.group({
    courseName: [''],
    gsheetId: [''],
    monday: this.fb.group({
      isDay: [false],
      hours: [0],
    }),
    tuesday: this.fb.group({
      isDay: [false],
      hours: [0],
    }),
    wednesday: this.fb.group({
      isDay: [false],
      hours: [0],
    }),
    thursday: this.fb.group({
      isDay: [false],
      hours: [0],
    }),
    friday: this.fb.group({
      isDay: [false],
      hours: [0],
    }),
  });

  getIsDayFormControlByDay(day: string) {
    return this.courseForm.get(day)?.get('isDay') as FormControl<boolean>;
  }

  getHoursFormControlByDay(day: string) {
    return this.courseForm.get(day)?.get('hours') as FormControl<number>;
  }

  onSubmit(event: any) {
    event.preventDefault();
    console.log('Submitted');
    console.log(this.getValue());
  }

  getValue() {
    const originValues = this.courseForm.value;
    let formValues = {
      courseName: originValues.courseName,
      gsheetId: originValues.gsheetId,
      days: new Array<{day:string, hours:number}>(),
    }
    
    if (originValues.monday?.isDay) {
      formValues.days.push({ day: 'Monday', hours: originValues.monday.hours || 0 });
    }
    if (originValues.tuesday?.isDay) {
      formValues.days.push({ day: 'Tuesday', hours: originValues.tuesday.hours || 0 });
    }
    if (originValues.wednesday?.isDay) {
      formValues.days.push({ day: 'Wednesday', hours: originValues.wednesday.hours || 0 });
    }
    if (originValues.thursday?.isDay) {
      formValues.days.push({ day: 'Thursday', hours: originValues.thursday.hours || 0 });
    }
    if (originValues.friday?.isDay) {
      formValues.days.push({ day: 'Friday', hours: originValues.friday.hours || 0 });
    }

    return formValues;
  }
}
