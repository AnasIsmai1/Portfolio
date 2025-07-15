import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TechStackModule { }
