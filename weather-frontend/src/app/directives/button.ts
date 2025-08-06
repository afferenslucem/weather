import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class Button {
  @Input()
  public size: 's' | 'm' = 'm';

  @Input()
  public appearance: 'primary' | 'flat' = 'primary';

  @HostBinding('class')
  public get classList(): string[] {
    return ['appButton-' + this.size, 'appButton-' + this.appearance];
  }
}
