import rootReducer from '../src/Chat/redux/reducers/index';
// import React from 'react';
// import { shallow } from 'enzyme';
// import Message from './Chat/components/Message';

const messagesObject = { data: [], error: false, isLoading: false };

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer({}, {})).toEqual({
      members: {},
      messages: messagesObject
    });
  });

  // it('renders message', () => {
  //   const wrapper = shallow(<Message />);
  //   expect(wrapper).toMatchSnapshot();
  // });
});
