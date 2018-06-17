import { ADD_VACATION, CLEAR_VACATION } from '../actions/types';

const initialState = {
  vacation: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_VACATION:
      return {
        ...state,
        vacation: action.payload
      };
    case CLEAR_VACATION:
      return {
        vacation: []
      };
    default:
      return state;
  }
}
