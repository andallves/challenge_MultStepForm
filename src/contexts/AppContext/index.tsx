import { ReactNode, useContext, useReducer, useCallback } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import { AppContextActions } from './AppContextActions';

export const INITIAL_STATE = {
  stepId: 1,
  name: 'test',
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
  state: INITIAL_STATE,
  nextStep: () => {},
  updateData: (value: string): void => {  value },
  },
);

interface IProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const nextStep = useCallback((): void => {
    dispatch({ type: AppContextActions.NextStep });
  }, [dispatch]);

  const updateData = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateData, payload: value });
    },
    [dispatch],
  );

  return (
    <AppContext.Provider value={{ state, nextStep, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useStepContext inside <StepContextProvider />',
    );
  }

  return context;
};
