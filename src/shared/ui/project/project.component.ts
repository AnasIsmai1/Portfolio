import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef) { }

  works: PROJECT[] = Projects;

  onLoad(index: number) {

    this.works[index].isLoading = false;
    this.cdr.detectChanges();
  }

}
