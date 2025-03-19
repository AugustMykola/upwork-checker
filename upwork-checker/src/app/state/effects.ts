import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, delay, map, of, switchMap, tap} from 'rxjs';
import * as MessagesActions from './actions';
import {MessageApiService} from '../providers/message-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class MessagesEffects {
  actions$ = inject(Actions);
  messageApiService: MessageApiService = inject(MessageApiService);
  private snackBar = inject(MatSnackBar);


  constructor(
  ) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.loadMessages),
      switchMap(() =>
        this.messageApiService.getMessages().pipe(
          delay(500),
          map((messages) => MessagesActions.loadMessagesSuccess({ messages })),
          catchError((error) => of(MessagesActions.loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );

  loadMessagesSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessagesActions.loadMessagesSuccess),
        tap(() => {
          this.snackBar.open('Messages successfully loaded!', 'Close', { duration: 3000 });
        })
      ),
    { dispatch: false }
  );

  loadMessagesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessagesActions.loadMessagesFailure),
        tap(({ error }) => {
          this.snackBar.open(`Error: ${error}`, 'Close', { duration: 3000, panelClass: 'snack-error' });
        })
      ),
    { dispatch: false }
  );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.addMessage),
      switchMap(({ message }) =>
        this.messageApiService.addMessage(message).pipe(
          delay(500),
          map(() => MessagesActions.addMessageSuccess({ message })),
          catchError((error) => of(MessagesActions.addMessageFailure({ error })))
        )
      )
    )
  );

  addMessageSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessagesActions.addMessageSuccess),
        tap(() => {
          this.snackBar.open('Message successfully added!', 'Close', { duration: 3000 });
        })
      ),
    { dispatch: false }
  );

  addMessageFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessagesActions.addMessageFailure),
        tap(({ error }) => {
          this.snackBar.open(`Error: ${error}`, 'Close', { duration: 3000, panelClass: 'snack-error' });
        })
      ),
    { dispatch: false }
  );

}
