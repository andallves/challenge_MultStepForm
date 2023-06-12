import { ReactNode, useContext, useReducer, useRef } from 'react';
import { ReducerProps, reducer } from './reducer';
import { State, initialState } from './data';
import { createContext } from 'react';
import { buildActions } from './build-actions';
import { Action } from './actions-types';

export interface ContextProps {
  state: State,
  dispatch: Action,
}

interface Provider {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export const StepContextProvider = ({ children }: Provider) => {

  const [state, dispatch] = useReducer<ReducerProps, State>(reducer, initialState);

  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[ state, actions.current ]}>
      {children}
    </Context.Provider>
  );
};

export const useStepContext = () => {
  const context = useContext<ContextProps>(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useStepContext inside <StepContextProvider />');
  }

  return [...context];
}
