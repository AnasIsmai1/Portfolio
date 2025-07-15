import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PROJECT, Projects } from '../../../projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProjectComponent {

  constructor(private cdr: ChangeDetectorRef) { }

  works: PROJECT[] = Projects;
  showTools: boolean[] = [];

  ngOnInit() {
    this.showTools = new Array(this.works.length).fill(false);
  }

  toggleTools(index: number) {
    this.showTools[index] = !this.showTools[index];
  }

  onLoad(index: number) {

    this.works[index].isLoading = false;
    this.cdr.detectChanges();
  }

}
