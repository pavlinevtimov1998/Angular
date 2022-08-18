import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/interfaces';
import { MessageBusService, MessageType } from '../message-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  isLoggingOut: boolean = false;

  message!: string;
  isErrorMessage!: boolean;

  private subscribtion: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageBus: MessageBusService
  ) {}

  ngOnInit(): void {
    this.subscribtion.add(
      this.messageBus.onNewMessage$.subscribe((newMessage) => {
        this.message = newMessage?.text || '';
        this.isErrorMessage = newMessage?.type === MessageType.Error;

        if (newMessage) {
          setTimeout(() => {
            this.messageBus.clear();
          }, 3000);
        }
      })
    );
  }

  logoutHandler(): void {
    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;

    this.authService.logout$().subscribe({
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
