import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum MessageType {
  Success,
  Error,
}

export interface Message {
  text: string;
  type: MessageType;
}

@Injectable({
  providedIn: 'root',
})
export class MessageBusService {
  private messageQue$ = new Subject<Message | undefined>();

  onNewMessage$ = this.messageQue$.asObservable();

  constructor() {}

  notifyForMessage(message: Message) {
    this.messageQue$.next(message);
  }

  clear(): void {
    this.messageQue$.next(undefined);
  }
}
