
import { createReducer, on } from '@ngrx/store';
import * as MessagesActions from './actions';

export interface State {
  messages: any[];
  loading: boolean;
  error: any;
}

export const initialState: State = {
  messages: [],
  loading: false,
  error: null
};

export const messagesReducer = createReducer(
  initialState,
  on(MessagesActions.loadMessages, (state) => ({ ...state, loading: true })),
  on(MessagesActions.loadMessagesSuccess, (state, { messages }) => ({ ...state, loading: false, messages })),
  // on(MessagesActions.loadMessagesFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(MessagesActions.addMessage, (state) => ({ ...state, loading: true })),
  on(MessagesActions.addMessageSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    messages: [...state.messages, message]
  })),
  // on(MessagesActions.addMessageFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
