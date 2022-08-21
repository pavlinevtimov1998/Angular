import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, mergeMap, Observable, Subscription, tap } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPost, IUser } from 'src/app/interfaces';
import { ITheme } from 'src/app/interfaces';
import { PostService } from 'src/app/services/post.service';
import { ThemeService } from 'src/app/services/theme.service';
import {
  MessageBusService,
  MessageType,
} from '../../../core/message-bus.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css'],
})
export class ThemeContentComponent implements OnInit, OnDestroy {
  theme!: ITheme;
  comments!: IPost[];

  subscribtion$!: Subscription;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser: IUser | undefined;

  constructor(
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private postService: PostService,
    private messageBus: MessageBusService
  ) {}

  ngOnInit(): void {
    this.subscribtion$ = combineLatest([
      this.activatedRoute.params.pipe(
        mergeMap((params) => {
          const themeId = params['themeId'];
          return this.themeService.getThemeById$(themeId);
        })
      ),
      this.authService.currentUser$,
    ]).subscribe(([theme, user]) => {
      (this.theme = theme), (this.comments = theme.posts);
      this.currentUser = user;
    });
  }

  canLike(likes: string[]): boolean {
    if (this.currentUser) {
      return likes.includes(this.currentUser._id);
    }

    return false;
  }

  like(comment: IPost): void {
    this.subscribtion$ = this.postService
      .like$(comment._id)
      .subscribe(({ message }) => {
        this.messageBus.notifyForMessage({
          text: message,
          type: MessageType.Success,
        });
      });

    if (this.currentUser) {
      comment.likes.push(this.currentUser._id);
    }
  }

  dislike(comment: IPost): void {
    this.subscribtion$ = this.postService
      .dislike$(comment._id)
      .subscribe(({ message }) => {
        this.messageBus.notifyForMessage({
          text: message,
          type: MessageType.Success,
        });
      });

    if (this.currentUser) {
      comment.likes = comment.likes.filter(
        (id) => id !== this.currentUser?._id
      );
    }
  }

  ngOnDestroy(): void {
    this.subscribtion$.unsubscribe();
    console.log('asd');
  }
}
