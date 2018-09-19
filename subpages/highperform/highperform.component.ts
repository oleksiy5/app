import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'highperform-courses',
  templateUrl: './highperform.component.html'
})

export class HighPerformComponent {
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
        ,videoID_EN: "kRtoGJ_OmNE"
        ,videoDescription: 'Syntax_17'
      },
      {      
        title: 'Syntax_18',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MoMHfBvQm8g')
        ,videoID: "MoMHfBvQm8g"
        ,videoID_EN: "-Puyfd-bf_E"
        ,videoDescription: 'Syntax_19'
      },
      {      
        title: 'Syntax_20',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/oAiSVyA_u0A')
        ,videoID: "oAiSVyA_u0A"
        ,videoID_EN: "rrDFWQAVlrY"
        ,videoDescription: 'Syntax_21'
      },
      {      
        title: 'Syntax_22',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b3da8GF82F8')
        ,videoID: "b3da8GF82F8"
        ,videoID_EN: "ZvmGT7XLAyE"
        ,videoDescription: 'Syntax_23'
      },
      {      
        title: 'Syntax_24',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/trfcyQIEnOI')
        ,videoID: "trfcyQIEnOI"
        ,videoID_EN: "YsdEINrmqUE"
        ,videoDescription: 'Syntax_25'
      },
      {      
        title: 'Syntax_26',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bAHlHAyRhks')
        ,videoID: "bAHlHAyRhks"
        ,videoID_EN: "K9aMNNYFMxE"
        ,videoDescription: 'Syntax_27'
      },
      {      
        title: 'Syntax_28',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MqqTb9fhK9c')
        ,videoID: "MqqTb9fhK9c"
        ,videoID_EN: "69PoV5-aoSo"
        ,videoDescription: 'Syntax_29'
      },
      {      
        title: 'Syntax_30',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/KVmSS7OpCOY')
        ,videoID: "KVmSS7OpCOY"
        ,videoID_EN: "aPFIqiVMJtU"
        ,videoDescription: 'Syntax_31'
      }
      ,
      {      
        title: 'Syntax_32',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xEEDauamaIM')
        ,videoID: "xEEDauamaIM"
        ,videoID_EN: "2tLIrD7fiRI"
        ,videoDescription: 'Syntax_33'
      }
      ,
      {      
        title: 'Syntax_34',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d3ZC0uH5820')
        ,videoID: "d3ZC0uH5820"
        ,videoID_EN: "IxWmXykt-mU"
        ,videoDescription: 'Syntax_35'
      }
    ];
}


export interface typeLessonSyntax {
  title: string; videoUrl: SafeResourceUrl; videoID: string; videoID_EN: string; videoDescription: string
}
