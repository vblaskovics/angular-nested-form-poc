import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  _course$ = new BehaviorSubject<Course | null>(null);

  constructor() { }

  setCourse(course: Course) {
    this._course$.next(course);
  }

  getCourse() {
    return this._course$.getValue();
  }
}
