import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  //constructor() { }

  constructor(private translateService: TranslateService) {
    //translateService.setDefaultLang('pl');
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  ngOnInit() {
  }

}
  