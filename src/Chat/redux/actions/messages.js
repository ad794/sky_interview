import _ from 'lodash';
import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  SORT_MESSAGES_ASCENDING
} from './types';
import { getMessages } from '../../../data';

export const loadMessages = (serviceToCall = getMessages) => async (dispatch) => {
  dispatch({ type: LOAD_MESSAGES, payload: true });
  try {
    const messages = await serviceToCall();
    dispatch({ type: LOAD_MESSAGES_SUCCESS, payload: messages });
  } catch (err) {
    dispatch({ type: LOAD_MESSAGES_FAILURE, payload: err });
  }
};

export const sortMessagesByTime = () => (dispatch, getStore) => {
  const sortedMessages = _.sortBy(getStore().messages.data, node =>
    new Date(node.timestamp).getTime());
  dispatch({ type: SORT_MESSAGES_ASCENDING, payload: sortedMessages });
};
