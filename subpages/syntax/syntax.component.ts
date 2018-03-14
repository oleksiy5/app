import { Component, Sanitizer } from '@angular/core';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'syntax-courses',
  templateUrl: './syntax.component.html'
})

export class SyntaxComponent  {
  isVisible: boolean = false;
  changeValue() {    
    this.isVisible = !this.isVisible;
  }

  constructor(private sanitizer: DomSanitizer){

  }

  public lessons: typeLesson[] = [
    {title: 'Programowanie C# - pierwszy krok', 
    videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3wHZQYyQ2is')},
     {title: 'debug aplikacji i przydatne klawisze F5, F10, F11', 
     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/91GDnzrsZZg')}
  ];
}

export interface typeLesson{
  title:string; videoUrl: SafeResourceUrl
}
