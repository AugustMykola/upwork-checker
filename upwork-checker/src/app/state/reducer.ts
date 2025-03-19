import { createReducer, on } from '@ngrx/store';
import { IMessage } from '../interfaces/IMessage';
import * as MessagesActions from './actions';

export interface MessagesState {
  messages: IMessage[];
  loading: boolean;
  error: Error | string | null;
}

export const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
};

export const messagesReducer = createReducer(
  initialState,

  on(MessagesActions.loadMessages, (state) => ({ ...state, loading: true })),
  on(MessagesActions.loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    loading: false,
    messages
  })),
  on(MessagesActions.loadMessagesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(MessagesActions.addMessage, (state) => ({ ...state, loading: true })),
  on(MessagesActions.addMessageSuccess, (state) => ({
    ...state,
    loading: false // Не оновлюємо messages тут, бо зараз loadMessages зробить це за нас
  })),
  on(MessagesActions.addMessageFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
