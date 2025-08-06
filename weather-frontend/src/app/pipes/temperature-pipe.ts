import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {

  transform(value?: number): string {
    if (value == null) {
      return ''
    }

    return `${value.toFixed(1)}°C`;
  }
}
