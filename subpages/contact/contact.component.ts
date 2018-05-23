import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'contact',
    templateUrl:'./contact.component.html'
})

export class ContactComponent{
    constructor(private translateService: TranslateService) {
        translateService.setDefaultLang('pl');
      }
    
      switchLanguage(language: string) {
        this.translateService.use(language);
      }
     
}