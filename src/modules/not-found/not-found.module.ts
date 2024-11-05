import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    RouterLink,
    NotFoundRoutingModule,
    CommonModule
  ]
})
export class NotFoundModule { }
