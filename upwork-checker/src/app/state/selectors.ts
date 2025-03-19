
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

export const selectMessagesState = createFeatureSelector<State>('messages');

export const selectAllMessages = createSelector(
  selectMessagesState,
  (state: State) => state.messages
);

export const selectLoading = createSelector(
  selectMessagesState,
  (state: State) => state.loading
);
