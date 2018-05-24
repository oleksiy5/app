import { Component } from '@angular/core';
//import {SyntaxComponent} from './subpages/syntax/syntax.component'
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from './app.languageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';


   constructor(private translateService: TranslateService) {
    translateService.addLangs(["en", "pl"]);
    let browserLang = translateService.getBrowserLang();
    //translateService.setDefaultLang(browserLang);
    translateService.use(browserLang.match(/en|pl/) ? browserLang : 'pl');
 }
}
