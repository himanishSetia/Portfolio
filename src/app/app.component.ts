import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Himanish';
  menu = [
    { name: 'About', class: 'about tab', link: '' },
    { name: 'Skills', class: 'skills tab', link: 'skills' },
    { name: 'Experience', class: 'experience tab', link: 'experience' },
    { name: 'Contact', class: 'contact tab', link: 'contact' }
  ]
  selectedIndex: number = 0;


  setIndex(index) {
    this.selectedIndex = index;
  }

}
