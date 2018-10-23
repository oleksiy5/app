import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'orderhp',
    templateUrl:'./orderhp.component.html'
})

export class OrderHPComponent{

    constructor(private translateService: TranslateService) {
        //this.lang = localStorage.getItem('lang');
      } 
    getCurrentLang(){
        return this.translateService.currentLang;
    }
}