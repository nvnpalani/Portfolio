import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { SkillsComponent } from './module/skills/skills.component';
import { ContactComponent } from './module/contact/contact.component';
import { ProjectComponent } from './module/project/project.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
];

