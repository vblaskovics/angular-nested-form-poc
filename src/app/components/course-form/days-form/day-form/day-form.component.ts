import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-day-form',
  template: `
    <input
      class="col-1"
      type="checkbox"
      [name]="day + 'CheckboxValue'"
      [id]="day + '-checkbox'"
      [formControl]="dayForm.controls.include"
    />
    <span class="col-sm">{{ label }}</span>
    <input
      class="col-sm"
      [name]="day + 'Value'"
      [id]="day + '-value'"
      [formControl]="dayForm.controls.hours"
      type="number"
    />
  `,
})
export class DayFormComponent {
  @Input() day!: string;
  @Input() dayForm!: FormGroup<{
    include: FormControl<boolean>;
    hours: FormControl<number>;
  }>;
  @Input() label!: string;
}
