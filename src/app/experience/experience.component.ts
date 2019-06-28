import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('fadeInOut',[
      state('void',style({
        opacity: 0
      })),
      transition('void <=> *',animate(1000))
    ])
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
