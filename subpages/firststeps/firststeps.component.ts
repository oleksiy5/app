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
      title: 'FirstSteps_9',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/91GDnzrsZZg'),
      videoID: "91GDnzrsZZg",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_10',
             answers: [
                { value: 'A', display: 'FirstSteps_11', isCorrect: true},
                { value: 'B', display: 'FirstSteps_12', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_13', isCorrect: false }  
            ]                                            
      } 
    }
    ,
    {
      title: 'FirstSteps_14',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dqR202ecsOI'),
      videoID: "dqR202ecsOI",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_15',
             answers: [
                { value: 'A', display: 'FirstSteps_16', isCorrect: false},
                { value: 'B', display: 'FirstSteps_17', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_18', isCorrect: true }  
            ]                                            
      } 
    }
    ,
    {
      title: 'FirstSteps_19',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/R1nBLhmOaNM'),
      videoID: "R1nBLhmOaNM",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_20',
             answers: [
                { value: 'A', display: 'FirstSteps_21', isCorrect: false},
                { value: 'B', display: 'FirstSteps_22', isCorrect: true }, 
                { value: 'C', display: 'FirstSteps_23', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_24',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HTg-wC_AdqA'),
      videoID: "HTg-wC_AdqA",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_25',
             answers: [
                { value: 'A', display: 'FirstSteps_26', isCorrect: true},
                { value: 'B', display: 'FirstSteps_27', isCorrect: false }, 
                { value: 'C', display: '', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_29',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TNaMEtZ6ld4'),
      videoID: "TNaMEtZ6ld4",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_30',
             answers: [
                { value: 'A', display: 'FirstSteps_31', isCorrect: false},
                { value: 'B', display: 'FirstSteps_32', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_33', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_34',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z1oAmATQjWQ'),
      videoID: "Z1oAmATQjWQ",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_35',
             answers: [
                { value: 'A', display: 'FirstSteps_36', isCorrect: true},
                { value: 'B', display: 'FirstSteps_37', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_38', isCorrect: false }  
            ]                                            
      } 
    } 
    ,
    {
      title: 'FirstSteps_39',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4C28M_ANIIo'),
      videoID: "4C28M_ANIIo",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_40',
             answers: [
                { value: 'A', display: 'FirstSteps_41', isCorrect: false},
                { value: 'B', display: 'FirstSteps_42', isCorrect: true }, 
                { value: 'C', display: 'FirstSteps_43', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_44',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lLTzdYvEYNA'),
      videoID: "lLTzdYvEYNA",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_45',
             answers: [
                { value: 'A', display: 'FirstSteps_46', isCorrect: false},
                { value: 'B', display: 'FirstSteps_47', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_48', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_49',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z6ZpYuUZ8zI'),
      videoID: "Z6ZpYuUZ8zI",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_50',
             answers: [
                { value: 'A', display: 'FirstSteps_51', isCorrect: true},
                { value: 'B', display: 'FirstSteps_52', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_53', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_54',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/69XAF6YAEwk'),
      videoID: "69XAF6YAEwk",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_55',
             answers: [
                { value: 'A', display: 'FirstSteps_56', isCorrect: false},
                { value: 'B', display: 'FirstSteps_57', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_58', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_59',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tCw8XlSErlY'),
      videoID: "tCw8XlSErlY",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_60',
             answers: [
                { value: 'A', display: 'FirstSteps_61', isCorrect: true},
                { value: 'B', display: 'FirstSteps_62', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_63', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_64',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CWlLCqU1GiQ'),
      videoID: "CWlLCqU1GiQ",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_65',
             answers: [
                { value: 'A', display: 'FirstSteps_66', isCorrect: false},
                { value: 'B', display: 'FirstSteps_67', isCorrect: true }, 
                { value: 'C', display: 'FirstSteps_68', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_69',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c1OsY4eveGU'),
      videoID: "c1OsY4eveGU",
      quiz: {           
             userAnswer: "" ,
             fontAnswer: "" ,
             question: 'FirstSteps_70' ,
             answers: [
                { value: 'A', display: 'FirstSteps_71', isCorrect: false},
                { value: 'B', display: 'FirstSteps_72', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_73', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_74',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iwRu2_Z8xzU'),
      videoID: "iwRu2_Z8xzU",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_75',
             answers: [
                { value: 'A', display: 'FirstSteps_76', isCorrect: true},
                { value: 'B', display: 'FirstSteps_77', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_78', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_79',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/jL9_9xTqqlg'),
      videoID: "jL9_9xTqqlg",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_80',
             answers: [
                { value: 'A', display: 'FirstSteps_81', isCorrect: false},
                { value: 'B', display: 'FirstSteps_82', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_83', isCorrect: true }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_84',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c2N4JB8d5lo'),
      videoID: "c2N4JB8d5lo",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_85',
             answers: [
                { value: 'A', display: 'FirstSteps_86', isCorrect: true},
                { value: 'B', display: 'FirstSteps_87', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_88', isCorrect: false }  
            ]                                            
      } 
    } ,
    {
      title: 'FirstSteps_89',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WvS0T-RqBFc'),
      videoID: "WvS0T-RqBFc",
      quiz: {           
             userAnswer: "",
             fontAnswer: "",
             question: 'FirstSteps_90',
             answers: [
                { value: 'A', display: 'FirstSteps_91', isCorrect: false},
                { value: 'B', display: 'FirstSteps_92', isCorrect: false }, 
                { value: 'C', display: 'FirstSteps_93', isCorrect: true }  
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
