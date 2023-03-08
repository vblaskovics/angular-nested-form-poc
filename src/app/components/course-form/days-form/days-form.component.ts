import { Component, Input, inject } from '@angular/core';
import { FormArray, FormGroup, FormControl, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-days-form',
  template: `
    <div *ngFor="let day of days; let i = index" class="row my-2">
      <app-day-form
        class="row"
        [day]="day"
        [label]="dayLabels[i]"
        [dayForm]="getDayForm(i)"
      ></app-day-form>
    </div>
  `,
})
export class DaysFormComponent {
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  @Input() daysForm?: FormArray<FormGroup<any>>;

  fb = inject(NonNullableFormBuilder);

  getDayForm(index: number) {
    return this.daysForm?.controls[index] as FormGroup<any>;
  }

  ngOnInit() {
    if (!this.daysForm) return;

    for (let day of this.days) {
      this.daysForm.push(
        this.fb.group({
          include: [false],
          hours: [0],
        })
      );
    }
  }
}
