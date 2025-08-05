import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  private isBrowser = isPlatformBrowser(this.platformId);

  public ngOnInit(): void {
    if (!this.isBrowser) {
      return
    }

    const chosenCity = localStorage.getItem('cityId');

    if (chosenCity) {
      this.router.navigate([chosenCity])
    } else {
      this.router.navigate(['choose-city'])
    }
  }
}
