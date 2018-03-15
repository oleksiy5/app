import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'syntax-courses',
  templateUrl: './syntax.component.html'
})

export class SyntaxComponent {
  isVisible: boolean = false;
  changeValue() {
    this.isVisible = !this.isVisible;
  }

  constructor(private sanitizer: DomSanitizer) {
  }

  public lessons: typeLesson[] = [
    {
      title: 'Programowanie C# - pierwszy krok',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3wHZQYyQ2is'),
      quiz: {            
             userAnswer: "",
             fontAnswer: "",
             question: 'Programując w C#, jakie jest podstawowe narzędzie?',
             answers: [
                { value: 'A', display: 'Google', isCorrect: false},
                { value: 'B', display: 'Notatnik', isCorrect: false }, 
                { value: 'C', display: 'Visual Studio', isCorrect: true }  
            ]                                            
      } 
    }
    ,
    {
      title: 'debug aplikacji i przydatne klawisze F5, F10, F11',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/91GDnzrsZZg'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Co to jest debug?',
             answers: [
                { value: 'A', display: '.', isCorrect: true},
                { value: 'B', display: '..', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    }
    //,
    // {
    //   title: 'debug aplikacji i przydatne klawisze F5, F10, F11',
    //   videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/91GDnzrsZZg')
    // }
  ];
}

export interface typeLesson {
  title: string; videoUrl: SafeResourceUrl; quiz: typQuiz;
}

export interface typQuiz
{
  question: string, answers: Array<typAnswer>; userAnswer: string; fontAnswer: string,
}

export interface typAnswer
{
  value: string; display: string; isCorrect: boolean; //userAnswer: boolean
}
