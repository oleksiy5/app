import { Component } from '@angular/core';

@Component({
  selector: 'syntax-courses',
  templateUrl: './syntax.component.html'
})

export class SyntaxComponent {
  isVisible: boolean = false;
  changeValue() {    
    this.isVisible = !this.isVisible;
  }
}