import { Component } from '@angular/core';
//import {SyntaxComponent} from './subpages/syntax/syntax.component'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('pl');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
 
}
