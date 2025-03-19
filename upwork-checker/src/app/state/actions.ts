// import { createAction, props } from '@ngrx/store';
//
// export const loadMessages = createAction('[Messages Page] Load Messages');
// export const loadMessagesSuccess = createAction('[Messages Page] Load Messages Success', props<{ messages: any[] }>());
// export const loadMessagesFailure = createAction('[Messages Page] Load Messages Failure', props<{ error: any }>());
//
// export const addMessage = createAction('[Messages Page] Add Message', props<{ message: any }>());
// export const addMessageSuccess = createAction('[Messages Page] Add Message Success', props<{ message: any }>());
// export const addMessageFailure = createAction('[Messages Page] Add Message Failure', props<{ error: any }>());
import {createAction, props} from '@ngrx/store';
import {IMessage} from '../interfaces/IMessage';

export const loadMessages = createAction('[Messages] Load Messages');
export const loadMessagesSuccess = createAction(
  '[Messages] Load Messages Success',
  props<{ messages: IMessage[] }>()
);
export const loadMessagesFailure = createAction(
  '[Messages] Load Messages Failure',
  props<{ error: Error | string }>()
);


export const addMessage = createAction(
  '[Messages] Add Message',
  props<{ message: IMessage }>()
);

export const addMessageSuccess = createAction(
  '[Messages] Add Message Success',
  props<{ message: any }>()
);

export const addMessageFailure = createAction(
  '[Messages] Add Message Failure',
  props<{ error: Error | string }>()
);
