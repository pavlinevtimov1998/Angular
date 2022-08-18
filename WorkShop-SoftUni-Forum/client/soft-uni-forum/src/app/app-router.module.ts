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
    path: '**',
    component: PageNotFoundComponent,
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
