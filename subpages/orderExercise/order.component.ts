import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'order',
    templateUrl:'./order.component.html'
})

export class OrderComponent{

    constructor(private translateService: TranslateService) {
        //this.lang = localStorage.getItem('lang');
      } 
    getCurrentLang(){
        return this.translateService.currentLang;
    }
}