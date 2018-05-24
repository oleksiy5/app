import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from '../app.languageService';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  //constructor() { }

  constructor(private translateService: TranslateService) {
    //translateService.setDefaultLang('pl');
    // translateService.setDefaultLang(languageService.getLanguage());
    // translateService.use(languageService.getLanguage());
  //   if(localStorage.getItem('lang')){
  //     translateService.setDefaultLang(localStorage.getItem('lang'));
  //     translateService.use(localStorage.getItem('lang'));
  // }else {
  //   translateService.setDefaultLang('en');
  //   translateService.use('en');
  //      localStorage.setItem("lang","en");
  // }
  }
  switchLanguage(language: string) {
    //this.languageService.setLanguage(language);
    localStorage.setItem("lang",language);
    var lang =localStorage.getItem("lang");// this.languageService.getLanguage();
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }

  ngOnInit() {
    
  }

}
  