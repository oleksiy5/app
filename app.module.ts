import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { SyntaxComponent } from './subpages/syntax/syntax.component';
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
import { OrderComponent } from './subpages//orderExercise/order.component';

import {Pipe, PipeTransform, Component} from '@angular/core'
import { DomSanitizer} from '@angular/platform-browser'

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
    AspNetMvcComponent,
    video1Component,
    HowLearnComponent,
    programowanieCPierwszyKrokComponent,
    SafePipe,
    ContactComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
