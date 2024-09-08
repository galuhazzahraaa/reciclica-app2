import { Action, createReducer, on } from '@ngrx/store';
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from './login.actions';
import { LoginState } from './loginState';
import { AppInitialState } from '../AppInitialState';

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(
  initialState,
  on(recoverPassword, state => ({
    ...state,
    error: null,
    isRecoveredPassword: false,
    isRecoveringPassword: true
  })),
  on(recoverPasswordSuccess, state => ({
    ...state,
    isRecoveringPassword: false,
    isRecoveredPassword: true
  })),
  on(recoverPasswordFail, (state, { error }) => ({
    ...state,
    error,
    isRecoveringPassword: false,
    isRecoveredPassword: false
  }))
);

export function loginReducer(state: LoginState | undefined, action: Action) {
  return reducer(state, action);
}
