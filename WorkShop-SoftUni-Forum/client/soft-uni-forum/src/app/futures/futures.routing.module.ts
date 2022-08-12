import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './theme/themes/themes.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent,
  },
  // {
  //     path: 'create-theme',
  //     component:
  // }
];

export const futureRoutingModule = RouterModule.forChild(routes);
