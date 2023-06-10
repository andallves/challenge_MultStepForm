import { ReactNode, useReducer } from 'react';
import { reducer } from './reducer';
import { UserData, data } from './data';
import { createContext } from 'react';

export interface ContextProps {
  state: UserData,
  dispatch: ({type}:{type: string}) => void,
}

interface Provider {
  children: ReactNode;
}

export const StepContext = createContext({} as ContextProps);

export const StepProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer<UserDados>(reducer, data);

  return (
    <StepContext.Provider value={{ state, dispatch }}>
      {children}
    </StepContext.Provider>
  );
};
