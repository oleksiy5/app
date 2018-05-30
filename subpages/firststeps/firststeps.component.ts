import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'firststeps-courses',
  templateUrl: './firststeps.component.html'
})

export class FirstStepsComponent {
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

  addIframe(id) {
    var div = document.getElementById(id);
    div.innerHTML = "<iframe width=\"100%\" height=\"100%\" frameborder = \"0\" allowfullscreen = \"1\" src=\"https://www.youtube.com/embed/_ID_?autoplay=1\"></iframe>\");".replace("_ID_",id);
}

  public lessons: typeLesson[] = [
    {      
      title: 'FirstSteps_4',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3wHZQYyQ2is'),
      videoID: "3wHZQYyQ2is",
      quiz: {            
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_5',
             answers: [
                 { value: 'A', display: 'FirstSteps_6', isCorrect: false},
                 { value: 'B', display: 'FirstSteps_7', isCorrect: false }, 
                 { value: 'C', display: 'FirstSteps_8', isCorrect: true }  
            ]                                            
      } 
    }
    ,
    {
      title: 'Debug aplikacji i przydatne klawisze F5, F10, F11',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/91GDnzrsZZg'),
      videoID: "91GDnzrsZZg",
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
      videoID: "dqR202ecsOI",
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
      videoID: "R1nBLhmOaNM",
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
      videoID: "HTg-wC_AdqA",
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
      videoID: "TNaMEtZ6ld4",
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
      videoID: "Z1oAmATQjWQ",
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
      videoID: "4C28M_ANIIo",
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
      videoID: "lLTzdYvEYNA",
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
      videoID: "Z6ZpYuUZ8zI",
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
      videoID: "69XAF6YAEwk",
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
      videoID: "tCw8XlSErlY",
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
      videoID: "CWlLCqU1GiQ",
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
      videoID: "c1OsY4eveGU",
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
      videoID: "iwRu2_Z8xzU",
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
      videoID: "jL9_9xTqqlg",
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
      videoID: "c2N4JB8d5lo",
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
      videoID: "WvS0T-RqBFc",
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
        ,videoDescription: 'Kolekcje to struktury, które są używane do przechowywania zbiorów (jakiejś ilości) obiektów. Takie kolekcje oferują szereg funkcjonalności umożliwiające wykonywanie operacji na elementach przechowywanych w kolekcji np. sortowanie, odwołanie się, filtrowanie, dodawanie, iterowanie lub ...'
      },
      {      
        title: 'Konstruktor i destruktor',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/03Pu1QDTHmA')
        ,videoDescription: 'Konstruktor to inaczej metoda, która wywołuje się w momencie powstania obiektu. Konstruktorów może być wiele w jednej klasie z różnymi parametrami wejściowymi i służy do wykonania pewnych operacji, które chcemy wykonać w trakcie tworzenia obiektu np. ustawić jakieś dane w właściwościach. Destruktor to metoda bezparametrowa, która jest wywoływana w momencie niszczenia obiektu i jest on tylko jeden, w której możemy zrobić dodatkowe rzeczy na chwilę przed zniszczeniem obiektu np. zamknąć połączenie na bazę danych. Poniżej przykłady zapisu konstruktora ...'
      },
      {      
        title: 'Przeciążania metod (ang. overload)',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5OtOhmmREsw')
        ,videoDescription: 'Gdy mówimy o przeciążeniu to może ono dotyczyć metod lub konstruktorów. Najprościej mówiąc przeciążenie to dublowanie tych samych metod (lub konstruktorów) ale z innymi parametrami wejściowymi (wywołania) i z trochę innym zachowaniem. Poniżej przykład, który obrazuje przeciążenie metody “DisplayName”...'
      },
      {      
        title: 'Boxing i unboxing',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tOpFnCfnxzE')
        ,videoDescription: 'Pojęcie boxing i unboxing wiąże się z przechodzeniem pomiędzy typami referencyjnymi a wartościowymi. Boxing - jest to konwersja typu wartościowego na typ referencyjny. Unboxing - operacja odwrotna do operacji boxing. Poniżej kod obrazujący operacje pakowania i wypakowan...'
      },
      {      
        title: 'Enum',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yp7Jmq524LE')
        ,videoDescription: 'Enum jest typem prostym/wartościowym (value type), który daje naszemu rozwiązaniu ścisłą kontrolę typów. Jeśli chciałbym od pewnych wartości uzależnić zachowanie aplikacji to mógłbym to zrobić opierając się na typie string lub int. Wszystko działałoby dobrze do czasu, gdy do mojego rozwiązania nie dostałaby się wartość której mój kod nie spodziewał się, dlatego że string i int mają dużo możliwości przekazania dowolnej wartości a tak dużej ilości nie jestem wstanie obsłużyć bo np. obsługuję tylko 3 wartości...'
      },
      {      
        title: 'Warunki "if" oraz "switch"',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Fr35Wugoibw')
        ,videoDescription: 'Instrukcja “if” daje nam więcej możliwości w zapisywaniu ilości logicznych wyrażeń niż “switch”, który może przyjmować jedną wartość. Jednak, gdy mamy do napisania dużej ilości bloków warunkowych lepiej użyć “switch”, gdyż jest instrukcją bardziej wydajniejszą niż “if”. Poniższy przykład ma dość skomplikowaną logikę, której nie moglibyśmy zapisać przy użyciu instrukcji switch...'
      },
      {      
        title: 'Pętle',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MoMHfBvQm8g')
        ,videoDescription: 'Pętla to taki mechanizm, który potrafi wywołać jeden blok kodu wiele razy. Innymi słowy pozwala na kilkakrotne wywołanie tego samego bloku kodu. W C# mamy do dyspozycji następujące pętle...'
      },
      {      
        title: 'Typy',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/oAiSVyA_u0A')
        ,videoDescription: 'Typy to takie definicje obiektów, które mówią o tym jak obiekt ma się zachowywać (metody) i jaki ma być (właściwości lub zmienne). W .NET mamy dwa rodzaje typów...'
      },
      {      
        title: 'Konwersja typów',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b3da8GF82F8')
        ,videoDescription: 'Język zorientowany obiektowo taki jak C# daje możliwość stworzenia definicji  obiektu. Taka definicja to typ, która dla różnych obiektów jest inna. Może zdarzyć się tak, że będziemy potrzebowali zamienić nasz obiekt np. z typu tekstowego (string) na typ liczbowy (int). Takim przykładem może zajść w sytuacji, gdy w konsoli czytamy wartości, które podał użytkownik w postaci tekstu a my potrzebujemy ten tekst zamienić na liczby po to aby wykonać jakąś operację matematyczną. Zobaczymy poniżej przyk...'
      },
      {      
        title: 'Tablice',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/trfcyQIEnOI')
        ,videoDescription: 'Tablice to struktury, które potrafią przechowywać wiele elementów o tym samym typie. Na przykład tablica typu bool będzie przechowywać wartości tylko true/false. A przykładowa deklaracja takiej tablicy może wyglądać tak...'
      },
      {      
        title: 'System.IO.File',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bAHlHAyRhks')
        ,videoDescription: 'Aby pracować z plikami .NET udostępnia nam klasę “File”, która oferuje szereg metod do wykonywania operacji na plikach. Klasa ta jest zlokalizowana w przestrzeni nazw (namespace) “System.IO”. Dlatego aby używać klasy file najpierw musimy zadeklarować namespace na początku pliku *.cs. Przykładowo wygląda to tak...'
      },
      {      
        title: 'Namespace',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MqqTb9fhK9c')
        ,videoDescription: 'Przestrzenie nazw (namespace) są nieodłącznym elementem każdego projektu. Służą do organizacji naszego kodu (inaczej klas, struktur, interfejsów) w określonej lokalizacji logicznej. Tak jak pliki są umieszczone w różnych folderach, tak nasze klasy (lub struktury, interfejsy) są rozmieszczone w takich logicznych częściach aplikacji każda z tych logicznych części ma swoją nazwę do której można się odwoływać i to są właśnie przestrzenie nazw (namespace). Jak sama nazwa wskazuje przestrzeń nazw to wirtualne miejsce gdzie znajdują się klasy (lub struktury, interfejsy). Najprościej przestrzenie nazw można porównać do nazw ulic czy...'
      },
      {      
        title: 'Komentarze w kodzie',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/KVmSS7OpCOY')
        ,videoDescription: 'Komentarze umieszczamy w kodzie naszej aplikacji. Ich celem jest dostarczenie dodatkowej informacji o tym co dany fragment kodu (np. metody) wykonuje lub za co jest odpowiedzialny. Jest to taki fragment tekstu, który jest dołączony do kodu aplikacji jednak kompilator go nie wykonuje. Komentowanie kodu jest dobrą praktyką programistyczną jednak należy pamiętać, że zbyt duża ilość komentarzy  może spowodować, że kod aplikacji będzie mało przejrzysty. W C# mamy trzy sposoby komentowania kodu - oto one...'
      }
      ,
      {      
        title: 'NULL',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xEEDauamaIM')
        ,videoDescription: 'Null mówi, że dana zmienna nie ma referencji (powiązania) do żadnego obiektu. Jeśli nie ma referencji to zadeklarowana zmienna jest pusta (tak jakby bez obiektu)...'
      }
      ,
      {      
        title: 'String',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d3ZC0uH5820')
        ,videoDescription: '<b>String</b> reprezentuje dane tekstowe. Zmienna o typie string jest typem referencyjnym i może zawierać dowolne dane tekstowe. W .NET za dane tekstowe odpowiada klasa <b>System.String</b>. Jednak w praktyce posługujemy się zapisem skróconym string. Praca z string’iem wiąże się z wykonywaniem wielu różnych operacji na tekście. Dodatkowo należy być zaznajomionym z często używaną klasą <b> StringBuilder </b>, która oferuję więcej możliwości niż podstawowa klasa string. Szczególnie przydaje się, gdy musimy pracować z tekstem w wielu iteracjach (<i>w pętli</i>).        '
      }
    ];
 }


export interface typeLessonSyntax {
  title: string; videoUrl: SafeResourceUrl; videoDescription: string
}

export interface typeLesson {
  title: string; videoUrl: SafeResourceUrl; videoID: string; quiz: typQuiz;
}

export interface typQuiz
{
  question: string, answers: Array<typAnswer>; userAnswer: string; fontAnswer: string,
}

export interface typAnswer
{
  value: string; display: string; isCorrect: boolean;
}
