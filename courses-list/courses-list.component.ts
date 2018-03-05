import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
// import { join } from 'path';
@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})

export class CoursesListComponent implements OnInit {
  coursesObservable: Array<Text>;
  constructor() { }
  ngOnInit() {
    this.coursesObservable = this.getCourses();
  }
  getCourses(): Array<Text> {
    var jsonData = JSON.parse(
      "{\"syntax-c-sharp\" : {\"description\" : \"Description syntax C#...\",\"title\" : \"Syntax C#\", \"url\" : \"syntax\"}, "
      +"\"asp-net-mvc\" : {\"description\" : \"Descriptions for ASP. NET MVC...\",\"title\" : \"ASP. NET MVC\", \"url\" : \"aspnetmvc\"},"
      +"\"angular-js\" : {\"description\" : \"Descriptions for NG....\",\"title\" : \"Angular JS\", \"url\" : \"https://codingthesmartway.com/courses/ionic3/\"}}"    
  );
    var arr = [];
    for(var x in jsonData){
      arr.push(jsonData[x]);
    }
    return arr; 
  }
}
