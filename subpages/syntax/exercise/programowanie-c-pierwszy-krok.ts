import { Component } from '@angular/core';

@Component({
  selector: 'programowanie-c-pierwszy-krok',
  templateUrl: './programowanie-c-pierwszy-krok.html'
})

export class programowanieCPierwszyKrokComponent {
    public question = "Programując w C#, jakie jest podstawowe narzędzie?";
    public answers = [
        { value: 'A', display: 'Google', isCorrect: false},
        { value: 'B', display: 'Notatnik', isCorrect: false }, 
        { value: 'C', display: 'Visual Studio', isCorrect: true }      
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