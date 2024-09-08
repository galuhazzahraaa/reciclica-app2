import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { RegisterState } from "./RegisterState";
import { register, registerFail, registerSuccess } from "./register.action";

const initialState: RegisterState = AppInitialState.register;

const reducer = createReducer(
  initialState,
  on(register, state => ({
    ...state,
    error: null,
    isRegistered: false,
    isRegistering: true
  })),
  on(registerSuccess, state => ({
    ...state,
    isRegistered: true,
    isRegistering: false
  })),
  on(registerFail, (state, action) => ({
    ...state,
    error: action.error,
    isRegistered: false,
    isRegistering: false
  }))
);

export function registerReducer(state: RegisterState | undefined, action: any): RegisterState {
  return reducer(state, action);
}
