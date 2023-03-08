import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form.component';
import { DaysFormComponent } from './days-form/days-form.component';
import { DayFormComponent } from './days-form/day-form/day-form.component';
import { CourseService } from 'src/app/services/course.service';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  let setInputValue = (selector: string, value: string | number) => {
    const input = fixture.nativeElement.querySelector(selector);
    input.value = value;
    input.dispatchEvent(new Event('input'));
  };

  let setCheckboxValue = (selector: string, value: boolean) => {
    const checkbox = fixture.nativeElement.querySelector(selector);
    checkbox.checked = value;
    checkbox.dispatchEvent(new Event('change'));
  };

  const spyCourseService: jasmine.SpyObj<CourseService> = jasmine.createSpyObj('CourseService', [
    'setCourse',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFormComponent, DaysFormComponent, DayFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: CourseService, useValue: spyCourseService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give back form value on submit', () => {
    const form = fixture.nativeElement.querySelector('form');

    setInputValue('input[name="courseName"]', 'Angular TDD');
    setInputValue('input[name="gsheetId"]', '1');
    setCheckboxValue('input[name="mondayCheckboxValue"]', true);
    setInputValue('input[name="mondayValue"]', 3);

    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.getValue()).toEqual({
      courseName: 'Angular TDD',
      gsheetId: '1',
      days: [
        { include: true, hours: 3 },
        { include: false, hours: 0 },
        { include: false, hours: 0 },
        { include: false, hours: 0 },
        { include: false, hours: 0 },
      ],
    });
  });

  it('should call setCourse on submit', () => {
    const form = fixture.nativeElement.querySelector('form');

    setInputValue('input[name="courseName"]', 'Angular TDD');
    setInputValue('input[name="gsheetId"]', '1');
    setCheckboxValue('input[name="mondayCheckboxValue"]', true);
    setInputValue('input[name="mondayValue"]', 3);

    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const courseService = TestBed.inject(CourseService);
    expect(courseService.setCourse).toHaveBeenCalledOnceWith({
      courseName: 'Angular TDD',
      gsheetId: '1',
      days: [
        { include: true, hours: 3 },
        { include: false, hours: 0 },
        { include: false, hours: 0 },
        { include: false, hours: 0 },
        { include: false, hours: 0 },
      ],
    });
  });
});
