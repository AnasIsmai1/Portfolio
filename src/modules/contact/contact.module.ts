import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
