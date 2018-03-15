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
             question: 'Co to jest debug aplikacji?',
             answers: [
                { value: 'A', display: 'Proces poszukiwania błędów', isCorrect: true},
                { value: 'B', display: 'To z angielskiego the bug [de-bug]', isCorrect: false }, 
                { value: 'C', display: 'Domena aplikacji rozproszonych', isCorrect: false }  
            ]                                            
      } 
    }
    ,
    {
      title: 'warunek "if"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dqR202ecsOI'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    }
    ,
    {
      title: 'pętle "for" i "foreach"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/R1nBLhmOaNM'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'kolekcje np. "List"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HTg-wC_AdqA'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Klasy i Obiekty - na przykładzie',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TNaMEtZ6ld4'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Ćwiczenie Klasy i Obiekty',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z1oAmATQjWQ'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } 
    ,
    {
      title: 'Metody i Konstruktory',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4C28M_ANIIo'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: '[Ćwicz C#] Metody  i  Konstruktory',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lLTzdYvEYNA'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Zmienne',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z6ZpYuUZ8zI'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Właściwości',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/69XAF6YAEwk'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Ćwicz C#\'pa zmienne i właściwości',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tCw8XlSErlY'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'modyfikatory dostępu',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CWlLCqU1GiQ'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Ćwicz C#\'a modyfikatory dostępu',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c1OsY4eveGU'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Rozwiązanie zadania z video Ćwicz C#\'a modyfikatory dostępu"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iwRu2_Z8xzU'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Zadanie końcowe',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/jL9_9xTqqlg'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Rozwiązanie zadania końcowego cz. 1',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c2N4JB8d5lo'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'rozwiązanie zadania końcowego cz. 2',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WvS0T-RqBFc'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: '...?',
             answers: [
                { value: 'A', display: '...', isCorrect: true},
                { value: 'B', display: '...', isCorrect: false }, 
                { value: 'C', display: '...', isCorrect: false }  
            ]                                            
      } 
    }
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
  value: string; display: string; isCorrect: boolean;
}
