import { Component } from '@angular/core';

@Component({
  selector: 'exercise-video1',
  templateUrl: './video1.html'
})

export class video1Component {
    public question = "Za co odpowiada metoda?";
    public answers = [
        { value: 'A', display: 'Przechowanie wartość obiektu', isCorrect: false},
        { value: 'B', display: 'Zachowanie obiektu', isCorrect: true }, 
        { value: 'C', display: 'Jest to styl projektowania klasy', isCorrect: false }      
    ];

    public userAnswer: String;
    public fontAnswer: String;
    setUserAnswer(ans: boolean) {    
        if(ans){
            this.userAnswer = "dobrze";
            this.fontAnswer = "green";
        }
        else{
            this.userAnswer = "źle";
            this.fontAnswer = "red";
        }
    }
}