import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from '../../../../directives/button';

@Component({
  selector: 'app-change-city',
  imports: [
    Button,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './change-city.html',
  styleUrl: './change-city.scss'
})
export class ChangeCity {

}
