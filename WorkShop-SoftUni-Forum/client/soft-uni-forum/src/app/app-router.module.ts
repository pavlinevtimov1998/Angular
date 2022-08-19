import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './futures/pages/home/home.component';
import { PageNotFoundComponent } from './futures/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'themes',
    loadChildren: () =>
      import('./futures/theme/theme.module').then((m) => m.ThemeModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const appRoutingModule = RouterModule.forRoot(routes);
