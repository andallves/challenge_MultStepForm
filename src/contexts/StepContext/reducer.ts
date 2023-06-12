import { State } from './data';
import { Action } from './actions-types';
import * as actionTypes from './actions-types';

export interface ReducerProps {
  state: State,
  action: Action,
}

export const reducer = ( state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.NEXT: {
      return { ...state, stepId: state.stepId + 1 };
    }
    case actionTypes.PREVIOUS: {
      return { ...state, stepId: state.stepId - 1 };
    }
    case actionTypes.UPDATE: {
      return { ...state, ...action.payload }
    }
  }
  return { ...state };
};
