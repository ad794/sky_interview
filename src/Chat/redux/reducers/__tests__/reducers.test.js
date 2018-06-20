import rootReducer from '../index';
import * as types from '../../actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const MESSAGES_INITIAL_STATE = { data: [], error: false, isLoading: false };
const MEMBERS_INITIAL_STATE = {};
const messagesToLoad = {
  id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
  message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
  timestamp: '2017-02-09T04:27:38Z'
};

describe('root reducer', () => {
  it('returns the initial state', () => {
    expect(rootReducer({}, {})).toEqual({
      members: MEMBERS_INITIAL_STATE,
      messages: MESSAGES_INITIAL_STATE
    });
  });
  it('sets isLoading true when loading messages', () => {
    expect(rootReducer({}, { type: types.LOAD_MESSAGES, isLoading: true })).toEqual({
      members: MEMBERS_INITIAL_STATE,
      messages: { ...MESSAGES_INITIAL_STATE, isLoading: true }
    });
  });
  it('set error to true if failure loading loading message', () => {
    expect(rootReducer({}, { type: types.LOAD_MESSAGES_FAILURE, error: true })).toEqual({
      members: MEMBERS_INITIAL_STATE,
      messages: { ...MESSAGES_INITIAL_STATE, error: true }
    });
  });
  it('should store messages in the store after loading', () => {
    expect(rootReducer({}, { type: types.LOAD_MESSAGES_SUCCESS, payload: messagesToLoad })).toEqual({
      members: MEMBERS_INITIAL_STATE,
      messages: { ...MESSAGES_INITIAL_STATE, data: messagesToLoad }
    });
  });
});
