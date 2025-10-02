import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponet {
  public type = input.required<'submit' | 'button'>();
  public text = input.required<string>();
}
