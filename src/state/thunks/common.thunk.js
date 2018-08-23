import * as commonActions from '../actions/common.action';

export const setHistoryThunk = (payload) => (dispatch) => {
  dispatch(commonActions.setHistory(payload));
};
