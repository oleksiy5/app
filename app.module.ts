import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { SyntaxComponent } from './subpages/syntax/syntax.component';
import { FirstStepsComponent } from './subpages/firststeps/firststeps.component';
import { AspNetMvcComponent } from './subpages/aspnetmvc/aspnetmvc.component';
import { routing } from './app.routes';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { video1Component } from './subpages/syntax/exercise/video1';
import { HowLearnComponent } from './subpages/howlearn/howlearn.component';
import { programowanieCPierwszyKrokComponent } from './subpages/syntax/exercise/programowanie-c-pierwszy-krok';
import { ContactComponent } from './subpages/contact/contact.component';
import { OrderComponent } from './subpages/orderExercise/order.component';
import { TermsComponent } from './subpages/termsuse/terms.component';
import { HighPerformComponent } from './subpages/highperform/highperform.component';
import { OrderHPComponent } from './subpages/highperform/orderHP/orderHP.component';
import { HadoopComponent } from './subpages/hadoop/hadoop.component';

import {Pipe, PipeTransform, Component} from '@angular/core'
import { DomSanitizer} from '@angular/platform-browser'

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './app.languageService';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    SyntaxComponent,
    FirstStepsComponent,
    AspNetMvcComponent,
    video1Component,
    HowLearnComponent,
    programowanieCPierwszyKrokComponent,
    SafePipe,
    ContactComponent,
    OrderComponent,
    TermsComponent,
    HighPerformComponent,
    OrderHPComponent,
    HadoopComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })    
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
