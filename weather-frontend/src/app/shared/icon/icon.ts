import { Component, input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  public name = input.required<string>();
}
