import rootReducer from '../src/Chat/redux/reducers/index';

const messagesObject = { data: [], error: false, isLoading: false };

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer({}, {})).toEqual({
      members: {},
      messages: messagesObject
    });
  });
});
