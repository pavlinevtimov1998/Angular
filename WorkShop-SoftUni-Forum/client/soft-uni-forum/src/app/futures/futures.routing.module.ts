import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ThemesComponent } from './theme/themes/themes.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

export const futureRoutingModule = RouterModule.forChild(routes);
