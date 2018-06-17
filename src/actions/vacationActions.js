import { ADD_VACATION, CLEAR_VACATION } from './types';

export const addVacation = vacationData => dispatch => {
  dispatch({
    type: ADD_VACATION,
    payload: vacationData
  });
};

export const clearVacation = () => dispatch => {
  dispatch({
    type: CLEAR_VACATION
  });
};
