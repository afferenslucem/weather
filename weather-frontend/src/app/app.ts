import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private localStorage = inject(LocalStorageService);

  private isBrowser = isPlatformBrowser(this.platformId);

  public ngOnInit(): void {
    if (!this.isBrowser) {
      return
    }

    const locale = this.localStorage.getLocale();

    if (locale) {
      this.translate.use(locale)
    }

    const chosenCity = this.localStorage.getCityId();

    if (chosenCity) {
      this.router.navigate(['/', 'weather', chosenCity])
    } else {
      this.router.navigate(['choose-city'])
    }
  }
}
