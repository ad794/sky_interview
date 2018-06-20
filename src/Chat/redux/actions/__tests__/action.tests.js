import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../actions/types';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 300);
  });

const mockMessages = [
  {
    id: '1',
    message: 'Donec dapibus. Duis at velit eu est congue elementum.',
    timestamp: '2016-12-18T00:43:13Z'
  },
  {
    id: '2',
    message: 'Donec dapibus. Duis at velit eu est congue elementum.',
    timestamp: '2010-12-18T00:43:13Z'
  }
];

const mockMembers = [
  {
    id: '1'
  },
  {
    id: '2'
  }
];

describe('load messages', () => {
  it('dispatches LOAD_MESSAGES and LOAD_MESSAGES_SUCCESS when messages are loaded from mocks', () => {
    const expectLoadMessages = { type: types.LOAD_MESSAGES, payload: true };
    const expectLoadMessagesSuccess = { type: types.LOAD_MESSAGES_SUCCESS, payload: mockMessages };
    return store.dispatch(actions.loadMessages(mockServiceCreator(mockMessages))).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectLoadMessages);
      expect(actions[1]).toEqual(expectLoadMessagesSuccess);
    });
  });
});

describe('load messages', () => {
  it('dispatches LOAD_MESSAGES and LOAD_MESSAGES_SUCCESS when messages are loaded from mocks', () => {
    const expectLoadMembers = { type: types.LOAD_MEMBERS, payload: true };
    const expectLoadMembersSuccess = { type: types.LOAD_MEMBERS_SUCCESS, payload: mockMembers };
    return store.dispatch(actions.loadMembers(mockServiceCreator(mockMembers))).then(() => {
      const actions = store.getActions();
      expect(actions[2]).toEqual(expectLoadMembers);
      expect(actions[3]).toEqual(expectLoadMembersSuccess);
    });
  });
});
