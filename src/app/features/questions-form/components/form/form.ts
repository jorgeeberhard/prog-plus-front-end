import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponet } from '../../../../../shared/components/button/button';

@Component({
  selector: 'app-form',
  imports: [ButtonComponet, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class FormComponent {
  protected form = new FormGroup({
    question1: new FormControl('', {
      validators: [Validators.required]
    }),
    question2: new FormControl('', {
      validators: [Validators.required]
    }),
    question3: new FormControl('', {
      validators: [Validators.required]
    }),
    question4: new FormControl('', {
      validators: [Validators.required]
    }),
    question5: new FormControl('', {
      validators: [Validators.required]
    }),
    question6: new FormControl('', {
      validators: [Validators.required]
    }),
    question7: new FormControl('', {
      validators: [Validators.required]
    })
  })

  protected onSubmit() {

    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return
    }
    console.log(this.form.value);
  }
}
