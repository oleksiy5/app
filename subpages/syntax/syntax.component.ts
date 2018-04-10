import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
      title: 'Debug aplikacji i przydatne klawisze F5, F10, F11',
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
      title: 'Warunek "if"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dqR202ecsOI'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Do czego służą warunki?',
             answers: [
                { value: 'A', display: 'Do iteracji', isCorrect: false},
                { value: 'B', display: 'Do zmianny wartości w zmiennych', isCorrect: false }, 
                { value: 'C', display: 'Pozwala uzależnić zachowanie aplikacji od pewnych wartości', isCorrect: true }  
            ]                                            
      } 
    }
    ,
    {
      title: 'Pętle "for" i "foreach"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/R1nBLhmOaNM'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Co wyświetli się na ekranie? <br><br> <pre> for (int i = 0; i < 5; i++) <br> &nbsp;&nbsp;&nbsp; Console.Write(i); </pre>',
             answers: [
                { value: 'A', display: '12345', isCorrect: false},
                { value: 'B', display: '01234', isCorrect: true }, 
                { value: 'C', display: '1234', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Kolekcje np. "List"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HTg-wC_AdqA'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Do czego są potrzebne kolekcje?',
             answers: [
                { value: 'A', display: 'Do przechowywania grupy obiektów/elementów', isCorrect: true},
                { value: 'B', display: 'Do wymiany danych z bazą danych', isCorrect: false }, 
                { value: 'C', display: 'Nazwa wzorca projektowego', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Klasy i Obiekty - na przykładzie',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TNaMEtZ6ld4'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Dlaczego z klasy powstaje obiekt?',
             answers: [
                { value: 'A', display: 'Obiekt nie może powstać z klasy', isCorrect: false},
                { value: 'B', display: 'Gdyż klasa to to samo co obiekt', isCorrect: false }, 
                { value: 'C', display: 'Klasa to taka definicja, z której powstaje coś rzeczywistego', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'Ćwiczenie - klasy i obiekty',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z1oAmATQjWQ'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Z jednej klasy ile może powstać obiektów?',
             answers: [
                { value: 'A', display: 'Dowolna ilość', isCorrect: true},
                { value: 'B', display: 'Tylko 1', isCorrect: false }, 
                { value: 'C', display: 'Obiekt z klasy nie może powstać', isCorrect: false }  
            ]                                            
      } 
    } 
    ,
    {
      title: 'Metody i konstruktory',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4C28M_ANIIo'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Za co odpowiadają metody i konstruktory?',
             answers: [
                { value: 'A', display: 'Przechowanie danych obiektu', isCorrect: false},
                { value: 'B', display: 'Za zachowanie obiektów', isCorrect: true }, 
                { value: 'C', display: 'Przyśpieszają działanie kodu w klasie', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: '[Ćwicz C#] Metody  i  konstruktory',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lLTzdYvEYNA'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Kiedy jest wywoływany kod konstruktora?',
             answers: [
                { value: 'A', display: 'Nie jest wywoływany', isCorrect: false},
                { value: 'B', display: 'W momencie zniszczenia obiektów pamięci', isCorrect: false }, 
                { value: 'C', display: 'W momencie tworzenia się obiektu', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'Zmienne',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z6ZpYuUZ8zI'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Jaki będzie prawidłowy zapis zmiennej typu tekstowego?',
             answers: [
                { value: 'A', display: 'string msg = "jakiś tekst";', isCorrect: true},
                { value: 'B', display: 'int msg = "ala ma kota";', isCorrect: false }, 
                { value: 'C', display: 'char msg = \'A\';', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Właściwości',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/69XAF6YAEwk'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Za co oprócz przechowywania danych mogą odpowiadać właściwości?',
             answers: [
                { value: 'A', display: 'Jest to alternatywa dla konstruktora klasy', isCorrect: false},
                { value: 'B', display: 'Właściwości mogą służyć do ukraywania pól', isCorrect: false }, 
                { value: 'C', display: 'Za wykonanie pewnych akcji/czynności', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'Ćwicz C#\'a zmienne i właściwości',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tCw8XlSErlY'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Czy wartość zmiennej można przekazać do środka konstruktora?',
             answers: [
                { value: 'A', display: 'TAK', isCorrect: true},
                { value: 'B', display: 'NIE', isCorrect: false }, 
                { value: 'C', display: 'Chyba nie :)', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Modyfikatory dostępu',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CWlLCqU1GiQ'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Jaki modyfikator dostępu odpowiada za widoczność tylko w obrębie klasy?',
             answers: [
                { value: 'A', display: 'public', isCorrect: false},
                { value: 'B', display: 'private', isCorrect: true }, 
                { value: 'C', display: 'internal', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Ćwicz C#\'a modyfikatory dostępu',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c1OsY4eveGU'),
      quiz: {           
             userAnswer: "" ,
             fontAnswer: "" ,
             question: 'Za co odpowiadają modyfikatory dostępu?' ,
             answers: [
                { value: 'A', display: 'Przechowują dane w klasie', isCorrect: false},
                { value: 'B', display: 'Związane są z zapisem danych do pliku', isCorrect: false }, 
                { value: 'C', display: 'Za nadawanie poziomu dostępności do konkretnej składowej np. w klasie', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'Rozwiązanie zadania z video Ćwicz C#\'a modyfikatory dostępu"',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iwRu2_Z8xzU'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Jaki modyfikator dostępu daje największy dostęp?',
             answers: [
                { value: 'A', display: 'public', isCorrect: true},
                { value: 'B', display: 'internal', isCorrect: false }, 
                { value: 'C', display: 'protected internal', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Zadanie końcowe',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/jL9_9xTqqlg'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Do losowania liczb służy:',
             answers: [
                { value: 'A', display: 'Console.GetNumber(10, 100);', isCorrect: false},
                { value: 'B', display: 'Next random = new Next(1, 100);', isCorrect: false }, 
                { value: 'C', display: 'Random random = new Random();', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'Rozwiązanie zadania końcowego cz. 1',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c2N4JB8d5lo'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Do czego jest mi potrzebny GitHub?',
             answers: [
                { value: 'A', display: 'Do przechowywania i kontroli wersji mojego kodu', isCorrect: true},
                { value: 'B', display: 'Do kompilacji i publikacji aplikacji', isCorrect: false }, 
                { value: 'C', display: 'Do dystrybucji gotowych aplikacji', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'Rozwiązanie zadania końcowego cz. 2',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WvS0T-RqBFc'),
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'Jaką komendą wgrywamy zmiany do repozytorium kodu na GitHub?',
             answers: [
                { value: 'A', display: 'git pull <link do repo>', isCorrect: false},
                { value: 'B', display: 'git clone <link do repo>', isCorrect: false }, 
                { value: 'C', display: 'git push -u origin master', isCorrect: true }  
            ]                                            
      } 
    }
  ];

    //second part
    public lessonsSyntax: typeLessonSyntax[] = [
      {      
        title: 'Kolekcje',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/kcbU1eWFtjM')
        ,videoDescription: 'Kolekcje są to ... opis zostosowanie to tez wchodzi do karty ćwiczeń. Karta ćwicen do kupienia lub do kupienia jako pakiet kart cwicen'
      },
      {      
        title: 'Konstruktor i destruktor',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/03Pu1QDTHmA')
        ,videoDescription: ''
      },
      {      
        title: 'Przeciążania metod (ang. overload)',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5OtOhmmREsw')
        ,videoDescription: ''
      },
      {      
        title: 'Boxing i unboxing',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tOpFnCfnxzE')
        ,videoDescription: ''
      },
      {      
        title: 'Enum',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yp7Jmq524LE')
        ,videoDescription: ''
      },
      {      
        title: 'Warunki "if" oraz "switch"',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Fr35Wugoibw')
        ,videoDescription: ''
      },
      {      
        title: 'Pętle',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MoMHfBvQm8g')
        ,videoDescription: ''
      },
      {      
        title: 'Typy',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/oAiSVyA_u0A')
        ,videoDescription: ''
      },
      {      
        title: 'Konwersja typów',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b3da8GF82F8')
        ,videoDescription: ''
      },
      {      
        title: 'Tablice',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/trfcyQIEnOI')
        ,videoDescription: ''
      },
      {      
        title: 'System.IO.File',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bAHlHAyRhks')
        ,videoDescription: ''
      },
      {      
        title: 'Namespace',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MqqTb9fhK9c')
        ,videoDescription: ''
      },
      {      
        title: 'Komentarze w kodzie',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/KVmSS7OpCOY')
        ,videoDescription: ''
      }
      ,
      {      
        title: 'NULL',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xEEDauamaIM')
        ,videoDescription: ''
      }
      ,
      {      
        title: 'String',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d3ZC0uH5820')
        ,videoDescription: ''
      }
    ];
}


export interface typeLessonSyntax {
  title: string; videoUrl: SafeResourceUrl; videoDescription: string
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
