import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form.component';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormComponent ],
      imports: [FormsModule, ReactiveFormsModule]
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
    courseNameInput.dispatchEvent(new Event('input'));
    
    const gsheetIdInput = fixture.nativeElement.querySelector('input[name="gsheetIdValue"]');
    gsheetIdInput.value = '1';
    gsheetIdInput.dispatchEvent(new Event('input'));
    
    const mondayCheckbox = fixture.nativeElement.querySelector('input[name="mondayCheckboxValue"]');
    mondayCheckbox.checked = true;
    mondayCheckbox.dispatchEvent(new Event('change'));
    
    const mondayInput = fixture.nativeElement.querySelector('input[name="mondayValue"]');
    mondayInput.value = 3;
    mondayInput.dispatchEvent(new Event('input'));
    
    form.dispatchEvent(new Event('submit'));
    
    fixture.detectChanges();

    let fValue = component.getValue();
    console.log(fValue); 
    expect(fValue).toEqual({
      courseName: 'Angular TDD',
      gsheetId: '1',
      days: [
        { day: 'Monday', hours: 3 }
      ]
    });
  });
});
