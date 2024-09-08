import { createReducer, on, Action } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingState } from './LoadingState';

const initialState: LoadingState = {
  show: false
};

const reducer = createReducer(
  initialState,
  on(show, () => ({
    show: true
  })),
  on(hide, () => ({
    show: false
  }))
);

export function loadingReducer(state: LoadingState = initialState, action: Action): LoadingState {
  return reducer(state, action);
}
