import { Component } from '@angular/core';
import { PROJECT, Projects } from '../../../projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {

  works: PROJECT[] = Projects;

}
