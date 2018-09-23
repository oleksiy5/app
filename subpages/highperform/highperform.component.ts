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
        title: 'HP_V_1',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/kcbU1eWFtjM')
        ,videoID: "kn7m7oFHVO8"
        ,videoID_EN: "kn7m7oFHVO8"
        ,videoDescription: 'HP_D_1'
      },
      {      
        title: 'HP_V_2',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/03Pu1QDTHmA')
        ,videoID: "n7IN9XoG2EA"
        ,videoID_EN: "n7IN9XoG2EA"
        ,videoDescription: 'HP_D_2'
      },
      {      
        title: 'HP_V_3',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5OtOhmmREsw')
        ,videoID: "ieMYEBOyzHc"
        ,videoID_EN: "ieMYEBOyzHc"
        ,videoDescription: 'HP_D_3'
      },
      {      
        title: 'HP_V_4',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tOpFnCfnxzE')
        ,videoID: "aNDbPK83u5Q"
        ,videoID_EN: "aNDbPK83u5Q"
        ,videoDescription: 'HP_D_4'
      },
      {      
        title: 'HP_V_5',
        videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yp7Jmq524LE')
        ,videoID: "F53n6rOcRUY"
        ,videoID_EN: "F53n6rOcRUY"
        ,videoDescription: 'HP_D_5'
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
