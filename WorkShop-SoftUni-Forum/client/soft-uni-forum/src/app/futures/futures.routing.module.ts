import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateThemeComponent } from './theme/create-theme/create-theme.component';
import { ThemeContentComponent } from './theme/theme-content/theme-content.component';
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
  {
    path: 'create-theme',
    canActivate: [AuthGuard],
    component: CreateThemeComponent,
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  {
    path: 'theme/:themeId',
    component: ThemeContentComponent,
  },
];

export const futureRoutingModule = RouterModule.forChild(routes);
