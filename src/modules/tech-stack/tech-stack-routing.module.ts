import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';

const routes: Routes = [
  {
    path: '',
    component: TechStackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechStackRoutingModule { }
