import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Experience } from './model/experience';
import { ExperienceService } from './experience.service';

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
    ]),
    trigger('LiftUp', [
      state('void', style({ transform: 'translateY(0)', opacity: 0 })),
      transition(':enter', [
        style({ transform: 'translateY(50%)' }),
        animate('1000ms 300ms ease-in')
      ]),
    ]),
    trigger('PullDown', [
      state('void', style({ transform: 'translateY(0)', opacity: 0 })),
      transition(':enter', [
        style({ transform: 'translateY(-50%)' }),
        animate('1000ms 300ms ease-in')
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getExperience().subscribe((response) => {
      this.experiences = response.experience;
    })
  }

}
