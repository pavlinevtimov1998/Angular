import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateThemeComponent } from './theme/create-theme/create-theme.component';
import { ThemeContentComponent } from './theme/theme-content/theme-content.component';
import { ThemesComponent } from './theme/themes/themes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThemesComponent,
  },
  {
    path: 'create-theme',
    canActivate: [AuthGuard],
    component: CreateThemeComponent,
  },
  {
    path: ':themeId',
    component: ThemeContentComponent,
  },
];

export const futureRoutingModule = RouterModule.forChild(routes);
