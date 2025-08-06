import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[skeleton]',
  host: {
    '[class.skeleton]': 'true',
  },
})
export class Skeleton {
  @HostBinding('class.skeleton--visible')
  @Input({ transform: booleanAttribute })
  public show: boolean = false;

  @Input()
  public type: 'text' | 'image' | undefined;

  constructor() { }
}
