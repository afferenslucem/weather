import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../directives/button';

@Component({
  selector: 'app-change-city',
  imports: [
    Button,
    RouterLink,
  ],
  templateUrl: './change-city.html',
  styleUrl: './change-city.scss'
})
export class ChangeCity {

}
