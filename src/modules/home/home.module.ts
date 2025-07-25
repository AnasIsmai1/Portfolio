import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { ProjectComponent } from '../../shared/ui/project/project.component';
import { ResumeComponent } from '../../shared/ui/resume/resume.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ProjectComponent,
    ResumeComponent,
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule { }
