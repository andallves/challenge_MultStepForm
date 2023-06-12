import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    next: () => dispatch({ type: actionTypes.NEXT }),
    previous: () => dispatch({ type: actionTypes.PREVIOUS }),
  };
};
