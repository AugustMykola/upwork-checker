import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import * as MessagesActions from './actions';
import {MessageApiService} from '../providers/message-api.service';

@Injectable()
export class MessagesEffects {
  actions$ = inject(Actions);
  messageApiService: MessageApiService = inject(MessageApiService);

  constructor(
  ) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.loadMessages),
      switchMap(() =>
        this.messageApiService.getMessages().pipe(
          map((messages) => MessagesActions.loadMessagesSuccess({ messages })),
          catchError((error) => of(MessagesActions.loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.addMessage),
      switchMap(({ message }) =>
        this.messageApiService.addMessage(message).pipe(
          map(() => MessagesActions.addMessageSuccess({ message })),
          catchError((error) => of(MessagesActions.addMessageFailure({ error })))
        )
      )
    )
  );

}
