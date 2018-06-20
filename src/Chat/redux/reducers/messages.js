import {
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES,
  LOAD_MESSAGES_FAILURE,
  SORT_MESSAGES_ASCENDING
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return { ...state, isLoading: true };
    case LOAD_MESSAGES_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case LOAD_MESSAGES_FAILURE:
      return { ...state, error: true };
    case SORT_MESSAGES_ASCENDING:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};
