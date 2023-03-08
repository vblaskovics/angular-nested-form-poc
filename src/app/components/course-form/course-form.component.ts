import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NonNullableFormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
})
export class CourseFormComponent {
  @ViewChild('courseForm') form!: ElementRef;

  fb = inject(NonNullableFormBuilder);
  courseService = inject(CourseService);

  courseForm = this.fb.group({
    courseName: [''],
    gsheetId: [''],
    days: new FormArray<any>([]),
  });

  ngOnInit() {}

  onSubmit() {
    this.courseService.setCourse(this.getValue());
  }

  getValue():Course {
    return this.courseForm.value as Course;
  }
}
