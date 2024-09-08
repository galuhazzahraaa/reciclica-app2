import { createAction } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { loadingReducer } from './loading.reducers';
import { LoadingState } from './LoadingState';


describe('Loading Reducer', () => {

  it('should set show to true when show action is dispatched', () => {
    const initialState: LoadingState = { show: false };

    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ show: true });
  });

  it('should set show to false when hide action is dispatched', () => {
    const initialState: LoadingState = { show: true };

    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({ show: true });
  });

  it('should keep state if action is unknown', () => {
    const initialState: LoadingState = { show: true };

    const unknownAction = createAction('UNKNOWN');

    const newState = loadingReducer(initialState, unknownAction);

    expect(newState).toEqual({ show: true });
  });

});
