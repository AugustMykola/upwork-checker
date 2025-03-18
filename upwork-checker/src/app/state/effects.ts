import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, switchMap} from 'rxjs';
import * as MessagesActions from './actions';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
  ) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.loadMessages),
      switchMap(() =>
        of(MessagesActions.loadMessagesSuccess({ messages: [] }))
      )
    )
  );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.addMessage),
      switchMap(({ message }) =>
        of(MessagesActions.addMessageSuccess({ message }))
      )
    )
  );

}
