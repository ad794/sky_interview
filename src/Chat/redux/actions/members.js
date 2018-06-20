import { LOAD_MEMBERS, LOAD_MEMBERS_SUCCESS, LOAD_MEMBERS_FAILURE } from './types';
import { getMembers } from '../../../data';

export const loadMembers = (serviceToCall = getMembers) => async (dispatch) => {
  dispatch({ type: LOAD_MEMBERS, payload: true });
  try {
    const members = await serviceToCall();
    dispatch({ type: LOAD_MEMBERS_SUCCESS, payload: members });
  } catch (err) {
    dispatch({ type: LOAD_MEMBERS_FAILURE, payload: err });
  }
};
