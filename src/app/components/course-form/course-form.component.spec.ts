import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give back form value on submit', () => {
    const form = fixture.nativeElement.querySelector('form');
    
    const courseNameInput = fixture.nativeElement.querySelector('input[name="courseNameValue"]');
    courseNameInput.value = 'Angular TDD';
    
    const gsheetIdInput = fixture.nativeElement.querySelector('input[name="gsheetIdValue"]');
    gsheetIdInput.value = '1';
    
    const mondayCheckbox = fixture.nativeElement.querySelector('input[name="mondayCheckboxValue"]');
    mondayCheckbox.checked = true;
    
    const mondayInput = fixture.nativeElement.querySelector('input[name="mondayValue"]');
    mondayInput.value = '3';
    
    form.dispatchEvent(new Event('submit'));
    
    fixture.detectChanges();
    expect(component.getValue()).toEqual({
      courseName: 'Angular TDD',
      gsheetId: '1',
      monday: '3',
    });
  });
});
