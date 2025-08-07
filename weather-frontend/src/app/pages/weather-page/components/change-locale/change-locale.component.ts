import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Button } from '../../../../directives/button';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-change-locale',
  imports: [
    Button,
  ],
  templateUrl: './change-locale.component.html',
  styleUrl: './change-locale.component.scss'
})
export class ChangeLocale {
  private translate = inject(TranslateService);
  private localStorage = inject(LocalStorageService);

  public get locale(): string {
    return this.translate.getCurrentLang();
  }

  public onClick(): void {
    if (this.locale == 'ru') {
      this.translate.use('en');
      this.localStorage.setLang('en');
    }
    else {
      this.translate.use('ru');
      this.localStorage.setLang('ru');
    }
  }
}
