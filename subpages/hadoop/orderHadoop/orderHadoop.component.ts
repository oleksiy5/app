import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'orderhadoop',
    templateUrl:'./orderhadoop.component.html'
})

export class OrderHadoopComponent{

    constructor(private translateService: TranslateService) {
        //this.lang = localStorage.getItem('lang');
      } 
    getCurrentLang(){
        return this.translateService.currentLang;
    }
}