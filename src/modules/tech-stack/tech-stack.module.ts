import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { TechStackRoutingModule } from './tech-stack-routing.module';



@NgModule({
  declarations: [
    TechStackComponent
  ],
  imports: [
    CommonModule,
    TechStackRoutingModule,
  ]
})
export class TechStackModule { }
