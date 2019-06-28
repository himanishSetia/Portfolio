import { Component, OnInit } from '@angular/core';
import { Skills } from './model/skills';
import { SkillsService } from './skills.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInOut',[
      state('void',style({
        opacity: 0
      })),
      transition('void <=> *',animate(1000))
    ])
  ]
})
export class SkillsComponent implements OnInit {
  frameworks: Skills[] = [];
  technologies: Skills[] = [];
  tools: Skills[] = [];
  
  constructor(private skillService: SkillsService) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe((response) => {
      this.frameworks = response.skills.filter(data => data.type === 'libraryAndFramework');
      this.technologies = response.skills.filter(data => data.type === 'technology');
      this.tools = response.skills.filter(data => data.type === 'tool');
    })
  }

}
