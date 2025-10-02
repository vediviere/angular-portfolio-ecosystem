import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/home').then((m) => m.Home),
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects').then((m) => m.Projects),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];
