
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessagesState } from './reducer';

export const selectMessagesState = createFeatureSelector<MessagesState>('messages');

export const selectAllMessages = createSelector(
  selectMessagesState,
  (state: MessagesState) => state.messages
);

export const selectLoading = createSelector(
  selectMessagesState,
  (state: MessagesState) => state.loading
);
