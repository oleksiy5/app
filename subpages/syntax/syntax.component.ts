import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'syntax-courses',
  templateUrl: './syntax.component.html'
})

export class SyntaxComponent {
  isVisible: boolean = false;
  isVisibleSyntax: boolean = false;

  changeValue() {
    this.isVisible = !this.isVisible;
  }
  changeValueSyntax(){
    this.isVisibleSyntax = !this.isVisibleSyntax;
  }

  constructor(private sanitizer: DomSanitizer, private translateService: TranslateService) {
  }

  addIframe(id) {
    var div = document.getElementById(id);
    div.innerHTML = "<iframe width=\"100%\" height=\"100%\" frameborder = \"0\" allowfullscreen = \"1\" src=\"https://www.youtube.com/embed/_ID_?autoplay=1\"></iframe>\");".replace("_ID_",id);
  }

  getCurrentLang(){
  return this.translateService.currentLang;
  }

  // public lessons: typeLesson[] = [
  //   {      
  //     title: 'Programowanie C# - pierwszy krok',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3wHZQYyQ2is'),
  //     quiz: {            
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Programując w C#, jakie jest podstawowe narzędzie?',
  //            answers: [
  //               { value: 'A', display: 'Google', isCorrect: false},
  //               { value: 'B', display: 'Notatnik', isCorrect: false }, 
  //               { value: 'C', display: 'Visual Studio', isCorrect: true }  
  //           ]                                            
  //     } 
  //   }
  //   ,
  //   {
  //     title: 'Debug aplikacji i przydatne klawisze F5, F10, F11',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/91GDnzrsZZg'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Co to jest debug aplikacji?',
  //            answers: [
  //               { value: 'A', display: 'Proces poszukiwania błędów', isCorrect: true},
  //               { value: 'B', display: 'To z angielskiego the bug [de-bug]', isCorrect: false }, 
  //               { value: 'C', display: 'Domena aplikacji rozproszonych', isCorrect: false }  
  //           ]                                            
  //     } 
  //   }
  //   ,
  //   {
  //     title: 'Warunek "if"',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dqR202ecsOI'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Do czego służą warunki?',
  //            answers: [
  //               { value: 'A', display: 'Do iteracji', isCorrect: false},
  //               { value: 'B', display: 'Do zmianny wartości w zmiennych', isCorrect: false }, 
  //               { value: 'C', display: 'Pozwala uzależnić zachowanie aplikacji od pewnych wartości', isCorrect: true }  
  //           ]                                            
  //     } 
  //   }
  //   ,
  //   {
  //     title: 'Pętle "for" i "foreach"',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/R1nBLhmOaNM'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Co wyświetli się na ekranie? <br><br> <pre> for (int i = 0; i < 5; i++) <br> &nbsp;&nbsp;&nbsp; Console.Write(i); </pre>',
  //            answers: [
  //               { value: 'A', display: '12345', isCorrect: false},
  //               { value: 'B', display: '01234', isCorrect: true }, 
  //               { value: 'C', display: '1234', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Kolekcje np. "List"',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HTg-wC_AdqA'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Do czego są potrzebne kolekcje?',
  //            answers: [
  //               { value: 'A', display: 'Do przechowywania grupy obiektów/elementów', isCorrect: true},
  //               { value: 'B', display: 'Do wymiany danych z bazą danych', isCorrect: false }, 
  //               { value: 'C', display: 'Nazwa wzorca projektowego', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Klasy i Obiekty - na przykładzie',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TNaMEtZ6ld4'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Dlaczego z klasy powstaje obiekt?',
  //            answers: [
  //               { value: 'A', display: 'Obiekt nie może powstać z klasy', isCorrect: false},
  //               { value: 'B', display: 'Gdyż klasa to to samo co obiekt', isCorrect: false }, 
  //               { value: 'C', display: 'Klasa to taka definicja, z której powstaje coś rzeczywistego', isCorrect: true }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Ćwiczenie - klasy i obiekty',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z1oAmATQjWQ'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Z jednej klasy ile może powstać obiektów?',
  //            answers: [
  //               { value: 'A', display: 'Dowolna ilość', isCorrect: true},
  //               { value: 'B', display: 'Tylko 1', isCorrect: false }, 
  //               { value: 'C', display: 'Obiekt z klasy nie może powstać', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } 
  //   ,
  //   {
  //     title: 'Metody i konstruktory',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4C28M_ANIIo'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Za co odpowiadają metody i konstruktory?',
  //            answers: [
  //               { value: 'A', display: 'Przechowanie danych obiektu', isCorrect: false},
  //               { value: 'B', display: 'Za zachowanie obiektów', isCorrect: true }, 
  //               { value: 'C', display: 'Przyśpieszają działanie kodu w klasie', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: '[Ćwicz C#] Metody  i  konstruktory',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lLTzdYvEYNA'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Kiedy jest wywoływany kod konstruktora?',
  //            answers: [
  //               { value: 'A', display: 'Nie jest wywoływany', isCorrect: false},
  //               { value: 'B', display: 'W momencie zniszczenia obiektów pamięci', isCorrect: false }, 
  //               { value: 'C', display: 'W momencie tworzenia się obiektu', isCorrect: true }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Zmienne',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z6ZpYuUZ8zI'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Jaki będzie prawidłowy zapis zmiennej typu tekstowego?',
  //            answers: [
  //               { value: 'A', display: 'string msg = "jakiś tekst";', isCorrect: true},
  //               { value: 'B', display: 'int msg = "ala ma kota";', isCorrect: false }, 
  //               { value: 'C', display: 'char msg = \'A\';', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Właściwości',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/69XAF6YAEwk'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Za co oprócz przechowywania danych mogą odpowiadać właściwości?',
  //            answers: [
  //               { value: 'A', display: 'Jest to alternatywa dla konstruktora klasy', isCorrect: false},
  //               { value: 'B', display: 'Właściwości mogą służyć do ukraywania pól', isCorrect: false }, 
  //               { value: 'C', display: 'Za wykonanie pewnych akcji/czynności', isCorrect: true }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Ćwicz C#\'a zmienne i właściwości',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tCw8XlSErlY'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Czy wartość zmiennej można przekazać do środka konstruktora?',
  //            answers: [
  //               { value: 'A', display: 'TAK', isCorrect: true},
  //               { value: 'B', display: 'NIE', isCorrect: false }, 
  //               { value: 'C', display: 'Chyba nie :)', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Modyfikatory dostępu',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CWlLCqU1GiQ'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Jaki modyfikator dostępu odpowiada za widoczność tylko w obrębie klasy?',
  //            answers: [
  //               { value: 'A', display: 'public', isCorrect: false},
  //               { value: 'B', display: 'private', isCorrect: true }, 
  //               { value: 'C', display: 'internal', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Ćwicz C#\'a modyfikatory dostępu',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c1OsY4eveGU'),
  //     quiz: {           
  //            userAnswer: "" ,
  //            fontAnswer: "" ,
  //            question: 'Za co odpowiadają modyfikatory dostępu?' ,
  //            answers: [
  //               { value: 'A', display: 'Przechowują dane w klasie', isCorrect: false},
  //               { value: 'B', display: 'Związane są z zapisem danych do pliku', isCorrect: false }, 
  //               { value: 'C', display: 'Za nadawanie poziomu dostępności do konkretnej składowej np. w klasie', isCorrect: true }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Rozwiązanie zadania z video Ćwicz C#\'a modyfikatory dostępu"',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iwRu2_Z8xzU'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Jaki modyfikator dostępu daje największy dostęp?',
  //            answers: [
  //               { value: 'A', display: 'public', isCorrect: true},
  //               { value: 'B', display: 'internal', isCorrect: false }, 
  //               { value: 'C', display: 'protected internal', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Zadanie końcowe',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/jL9_9xTqqlg'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Do losowania liczb służy:',
  //            answers: [
  //               { value: 'A', display: 'Console.GetNumber(10, 100);', isCorrect: false},
  //               { value: 'B', display: 'Next random = new Next(1, 100);', isCorrect: false }, 
  //               { value: 'C', display: 'Random random = new Random();', isCorrect: true }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Rozwiązanie zadania końcowego cz. 1',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c2N4JB8d5lo'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Do czego jest mi potrzebny GitHub?',
  //            answers: [
  //               { value: 'A', display: 'Do przechowywania i kontroli wersji mojego kodu', isCorrect: true},
  //               { value: 'B', display: 'Do kompilacji i publikacji aplikacji', isCorrect: false }, 
  //               { value: 'C', display: 'Do dystrybucji gotowych aplikacji', isCorrect: false }  
  //           ]                                            
  //     } 
  //   } ,
  //   {
  //     title: 'Rozwiązanie zadania końcowego cz. 2',
  //     videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WvS0T-RqBFc'),
  //     quiz: {           
  //            userAnswer: "",
  //            fontAnswer: "",
  //            question: 'Jaką komendą wgrywamy zmiany do repozytorium kodu na GitHub?',
  //            answers: [
  //               { value: 'A', display: 'git pull <link do repo>', isCorrect: false},
  //               { value: 'B', display: 'git clone <link do repo>', isCorrect: false }, 
  //               { value: 'C', display: 'git push -u origin master', isCorrect: true }  
  //           ]                                            
  //     } 
  //   }
  // ];

    //second part
    public lessonsSyntax: typeLessonSyntax[] = [
      {      
        title: 'Syntax_6',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/kcbU1eWFtjM')
        ,videoID: "kcbU1eWFtjM"
        ,videoID_EN: "eyASoSkNGJY"
        ,videoDescription: 'Syntax_7'
      },
      {      
        title: 'Syntax_8',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/03Pu1QDTHmA')
        ,videoID: "03Pu1QDTHmA"
        ,videoID_EN: "q1feV-RR57U"
        ,videoDescription: 'Syntax_9'
      },
      {      
        title: 'Syntax_10',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5OtOhmmREsw')
        ,videoID: "5OtOhmmREsw"
        ,videoID_EN: "8BYwhRBJdwI"
        ,videoDescription: 'Syntax_11'
      },
      {      
        title: 'Syntax_12',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tOpFnCfnxzE')
        ,videoID: "tOpFnCfnxzE"
        ,videoID_EN: "F3yYL8300Uk"
        ,videoDescription: 'Syntax_13'
      },
      {      
        title: 'Syntax_14',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yp7Jmq524LE')
        ,videoID: "yp7Jmq524LE"
        ,videoID_EN: "s-fxogt0J1A"
        ,videoDescription: 'Syntax_15'
      },
      {      
        title: 'Syntax_16',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Fr35Wugoibw')
        ,videoID: "Fr35Wugoibw"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_17'
      },
      {      
        title: 'Syntax_18',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MoMHfBvQm8g')
        ,videoID: "MoMHfBvQm8g"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_19'
      },
      {      
        title: 'Syntax_20',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/oAiSVyA_u0A')
        ,videoID: "oAiSVyA_u0A"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_21'
      },
      {      
        title: 'Syntax_22',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b3da8GF82F8')
        ,videoID: "b3da8GF82F8"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_23'
      },
      {      
        title: 'Syntax_24',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/trfcyQIEnOI')
        ,videoID: "trfcyQIEnOI"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_25'
      },
      {      
        title: 'Syntax_26',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bAHlHAyRhks')
        ,videoID: "bAHlHAyRhks"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_27'
      },
      {      
        title: 'Syntax_28',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MqqTb9fhK9c')
        ,videoID: "MqqTb9fhK9c"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_29'
      },
      {      
        title: 'Syntax_30',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/KVmSS7OpCOY')
        ,videoID: "KVmSS7OpCOY"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_31'
      }
      ,
      {      
        title: 'Syntax_32',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xEEDauamaIM')
        ,videoID: "xEEDauamaIM"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_33'
      }
      ,
      {      
        title: 'Syntax_34',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d3ZC0uH5820')
        ,videoID: "d3ZC0uH5820"
        ,videoID_EN: ""
        ,videoDescription: 'Syntax_35'
      }
    ];
}


export interface typeLessonSyntax {
  title: string; videoUrl: SafeResourceUrl; videoID: string; videoID_EN: string; videoDescription: string
}

// export interface typeLesson {
//   title: string; videoUrl: SafeResourceUrl; quiz: typQuiz;
// }

// export interface typQuiz
// {
//   question: string, answers: Array<typAnswer>; userAnswer: string; fontAnswer: string,
// }

// export interface typAnswer
// {
//   value: string; display: string; isCorrect: boolean;
// }
