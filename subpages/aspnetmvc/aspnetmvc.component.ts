import { Component } from '@angular/core';

@Component({
    selector: 'aspnetmvc-courses',
    templateUrl:'./aspnetmvc.component.html'
})

export class AspNetMvcComponent{
    isVisible: boolean = false;
    changeValue(){
        this.isVisible = !this.isVisible;
    }
}