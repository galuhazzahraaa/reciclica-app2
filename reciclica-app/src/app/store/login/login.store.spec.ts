import { AppInitialState } from '../AppInitialState';
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from './login.actions';
import { loginReducer } from './login.reducers';
import { LoginState } from './loginState';

describe('Login store', () => {

  it('should handle recoverPassword action', () => {
    const initialState: LoginState = AppInitialState.login;


    const newState = loginReducer(initialState, recoverPassword());

    expect(newState).toEqual({
      ...initialState,
      isRecoveredPassword: false,
      isRecoveringPassword: true
    });
  });

  it('should handle recoverPasswordSuccess action', () => {
    const initialState: LoginState = AppInitialState.login;

    const newState = loginReducer(initialState, recoverPasswordSuccess());

    expect(newState).toEqual({
      ...initialState,
      isRecoveredPassword: true,
      isRecoveringPassword: false
    });
  });

  it('should handle recoverPasswordFail action', () => {
    const initialState: LoginState = AppInitialState.login

    const error = { error: 'error' }; // Perbaiki objek error

    const newState = loginReducer(initialState, recoverPasswordFail({ error }));

    expect(newState).toEqual({
      ...initialState,
      error,
      isRecoveredPassword: false,
      isRecoveringPassword: false
    });
  });

});
