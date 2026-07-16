import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule, 
    AboutComponent, 
    SkillsComponent, 
    ProjectComponent, 
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
