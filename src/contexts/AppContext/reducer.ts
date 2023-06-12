import { InitialStateType } from '.';
import { AppContextActions } from './AppContextActions';
import { IDispatchAction } from '../../interfaces/IDispatchAction';

export const reducer = (
  state: InitialStateType,
  action: IDispatchAction,
): InitialStateType => {
  switch (action.type) {
    case AppContextActions.NextStep: {
      return { ...state, stepId: state.stepId + 1 };
    }
    case AppContextActions.PrevStep: {
      return { ...state, stepId: state.stepId - 1 };
    }
    case AppContextActions.UpdateData: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, name: action.payload };
    }
    default:
      throw new Error("Action type don't exist, vefiry the folder");

  }
};
