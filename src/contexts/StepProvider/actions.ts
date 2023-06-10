import * as types from './types';
import { ContextProps } from './index';

export const nextStep = ({ dispatch }: ContextProps): void => {
  dispatch({ type: types.NEXTSTEP });
};

export const previousStep = ({dispatch}: ContextProps): void => {
  dispatch({ type: types.PREVIUOSSTEP });
};
