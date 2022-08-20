import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPost } from 'src/app/interfaces';
import { ITheme } from 'src/app/interfaces';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css'],
})
export class ThemeContentComponent implements OnInit {
  theme!: ITheme;
  comments!: IPost[];

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.themeService.getThemeById$(themeId).subscribe((theme) => {
      this.theme = theme;
      this.comments = theme.posts;
    });
  }

  canLike(likes: string[]): boolean {
    // TODO: ADD BETER FUNCTIONLAITY.
    return likes.includes('5fa64b162183ce1728ff371d');
  }
}
