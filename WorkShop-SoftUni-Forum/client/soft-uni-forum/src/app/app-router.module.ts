import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './futures/home/home.component';

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
];

export const appRoutingModule = RouterModule.forRoot(routes);
