import { UserData } from './data';
import * as types from './types';

export type ReducerProps = {
  state: UserData;
  action: () => {};
};

export const reducer = ({ state, action }: ReducerProps) => {
  switch (action.type) {
    case types.NEXTSTEP: {
      return { ...state, stepId: state.stepId + 1 };
    }
    case types.PREVIUOSSTEP: {
      return { ...state, stepId: state.stepId - 1 };
    }
  }
  return { ...state };
};
