import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import {LanguageService} from '../app.languageService';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  //constructor() { }

  constructor(private translateService: TranslateService) {

    var lang = localStorage.getItem('lang');
    if (lang) {
      translateService.use(localStorage.getItem('lang'));
    } 
    else {
      translateService.use('pl');
      localStorage.setItem("lang", "pl");
    }
  }

  switchLanguage(language: string) {
    localStorage.setItem("lang", language);
    var lang = localStorage.getItem("lang");
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    // console.log(lang);
  }

  ngOnInit() {

  }

}
