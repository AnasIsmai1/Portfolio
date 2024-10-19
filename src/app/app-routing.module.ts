import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'stack',
    title: 'Tech Stack | Portfolio',
    loadChildren: () => import('../modules/tech-stack/tech-stack.module').then((m) => m.TechStackModule),
  },
  {
    path: 'contact',
    title: 'Contact | Portfolio',
    loadChildren: () => import('../modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'about',
    title: 'About | Portfolio',
    loadChildren: () => import('../modules/about/about.module').then((m) => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
