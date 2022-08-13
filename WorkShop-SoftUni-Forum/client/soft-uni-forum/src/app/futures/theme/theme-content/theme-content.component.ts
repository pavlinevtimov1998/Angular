import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { ITheme } from 'src/app/interfaces/theme';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css'],
})
export class ThemeContentComponent implements OnInit {
  theme!: ITheme;
  comments!: IPost[];

  isLoggedIn: boolean = this.userService.isLoggedIn();

  constructor(
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.themeService.getThemeById(themeId).subscribe((theme) => {
      this.theme = theme;
      this.comments = theme.posts;
    });
  }

  canLike(likes: string[]): boolean {
    return likes.includes('5fa64b162183ce1728ff371d');
  }
}