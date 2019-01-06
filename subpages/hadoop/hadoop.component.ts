import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hadoop-courses',
  templateUrl: './hadoop.component.html'
})

export class HadoopComponent {
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
        title: 'HADOOP_3',
        videoID: "D9i4i4jFVNs"
        ,videoID_EN: "D9i4i4jFVNs"
        ,videoDescription: 'HADOOP_4'
      },
      {      
        title: 'HADOOP_5',
        videoID: "JOEKPpYu8_c"
        ,videoID_EN: "JOEKPpYu8_c"
        ,videoDescription: 'HADOOP_6'
      },
      {      
        title: 'HADOOP_7',
        videoID: "9uoVaAs6iBo"
        ,videoID_EN: "9uoVaAs6iBo"
        ,videoDescription: 'HADOOP_8'
      },
      {      
        title: 'HADOOP_9',
        videoID: "NNDugi96nZE"
        ,videoID_EN: "NNDugi96nZE"
        ,videoDescription: 'HADOOP_10'
      },
      {      
        title: 'HADOOP_11',
        videoID: "NZgZD6utNZM"
        ,videoID_EN: "NZgZD6utNZM"
        ,videoDescription: 'HADOOP_12'
      },
      {      
        title: 'HADOOP_13',
        videoID: "QC7st6NoUhg"
        ,videoID_EN: "QC7st6NoUhg"
        ,videoDescription: 'HADOOP_14'
      }
    ];
}


export interface typeLessonSyntax {
  title: string; videoID: string; videoID_EN: string; videoDescription: string
}
