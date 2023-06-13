import { InitialStateType } from '.';
import { AppContextActions } from './AppContextActions';
import { IDispatchAction } from '../../interfaces/IDispatchAction';

export const reducer = (
  state: InitialStateType,
  action: IDispatchAction,
): InitialStateType => {
  switch (action.type) {

    case AppContextActions.UpdateName: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, name: action.payload };
    }
    case AppContextActions.UpdateTel: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, tel: action.payload };
    }
    case AppContextActions.UpdateEmail: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, email: action.payload };
    }
    case AppContextActions.UpdateNameBusiness: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, nameBusiness: action.payload };
    }
    case AppContextActions.UpdateQtdFuncionarios: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, qtdFuncionarios: action.payload };
    }
    case AppContextActions.UpdateAboutBusiness: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, aboutBusiness: action.payload };
    }
    case AppContextActions.UpdateAboutProject: {
      if ( typeof action.payload === 'undefined') return { ...state }
      return { ...state, aboutProject: action.payload };
    }
    default:
      throw new Error("Action type don't exist, vefiry the folder");

  }
};
