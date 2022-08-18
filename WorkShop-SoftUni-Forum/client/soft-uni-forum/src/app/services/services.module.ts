import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [PostService, ThemeService, UserService],
})
export class ServicesModule {}
