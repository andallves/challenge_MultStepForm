import { ReactNode, useContext, useReducer, useCallback } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import { AppContextActions } from './AppContextActions';
import { IDispatchAction } from '../../interfaces/IDispatchAction';

export const INITIAL_STATE = {
  stepId: 1,
  name: 'test',
  tel: '85932302382',
  email: 'and@gamil.com',
  nameBusiness: 'test',
  qtdFuncionarios: '5',
  aboutBusiness: 'Lorem ...',
  aboutProject: 'Lorem ...',
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
  state: INITIAL_STATE,
  updateName: (value: string): void => {
    value;
  },
  updateTel: (value: string): void => {
    value;
  },
  updateEmail: (value: string): void => {
    value;
  },
  updateNameBusiness: (value: string): void => {
    value;
  },
  updateQtdFuncionarios: (value: string): void => {
    value;
  },
  updateAboutBusiness: (value: string): void => {
    value;
  },
  updateAboutProject: (value: string): void => {
    value;
  },
});

interface IProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateName = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateName, payload: value });
    },
    [dispatch],
  );

  const updateTel = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateTel, payload: value });
    },
    [dispatch],
  );

  const updateEmail = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateEmail, payload: value });
    },
    [dispatch],
  );

  const updateNameBusiness = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateNameBusiness, payload: value });
    },
    [dispatch],
  );

  const updateQtdFuncionarios = useCallback(
    (value: string): void => {
      dispatch({
        type: AppContextActions.UpdateQtdFuncionarios,
        payload: value,
      });
    },
    [dispatch],
  );

  const updateAboutBusiness = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateAboutBusiness, payload: value });
    },
    [dispatch],
  );

  const updateAboutProject = useCallback(
    (value: string): void => {
      dispatch({ type: AppContextActions.UpdateAboutProject, payload: value });
    },
    [dispatch],
  );

  return (
    <AppContext.Provider
      value={{
        state,
        updateName,
        updateTel,
        updateEmail,
        updateNameBusiness,
        updateQtdFuncionarios,
        updateAboutBusiness,
        updateAboutProject,
      }}
    >
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
