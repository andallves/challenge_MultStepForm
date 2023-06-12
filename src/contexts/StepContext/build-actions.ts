import * as actionTypes from './actions-types';
import { Action } from './actions-types';

export const buildActions = (dispatch) => {
  return {
    next: () => dispatch({ type: actionTypes.NEXT }),
    previous: () => dispatch({ type: actionTypes.PREVIOUS }),
    update: (payload) => dispatch({ type: actionTypes.UPDATE, payload }),
  };
};
