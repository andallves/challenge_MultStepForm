import { UserData } from './data';
import * as actionTypes from './actions-types';

export interface ReducerProps {
  state: UserData;
  action: () => VoidFunction;
};

export const reducer = ({ state, action }: ReducerProps) => {
  switch (action.type) {
    case actionTypes.NEXT: {
      return { ...state, stepId: state.stepId + 1 };
    }
    case actionTypes.PREVIOUS: {
      return { ...state, stepId: state.stepId - 1 };
    }
  }
  return { ...state };
};
