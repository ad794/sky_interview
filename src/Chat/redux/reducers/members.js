import _ from 'lodash';
import { LOAD_MEMBERS_SUCCESS, LOAD_MEMBERS_FAILURE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MEMBERS_SUCCESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case LOAD_MEMBERS_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};
