import React from 'react';
import renderer from 'react-test-renderer';
import Messages from '../Messages';

import { findById } from '../../utils';

const mock = {
  data: [
    {
      id: 'b03569ae-ccbf-4975-8040-4daba638b405',
      userid: '1',
      message: 'message 1'
    },
    {
      id: 'b03569ae-ccbf-4975-8040-4daba638b407',
      userId: '2',
      message: 'message 1'
    }
  ],
  members: [
    {
      1: {
        userId: '1',
        email: 'test@test.com',
        avatar: ''
      }
    },
    {
      2: {
        userId: '2',
        email: 'test@test.com',
        avatar: ''
      }
    }
  ]
};

describe('messages component', () => {
  const messagesComponentTree = renderer.create(<Messages {...mock} />).toJSON();
  const messagesComponent = renderer.create(<Messages {...mock} />).getInstance();
  it('renders correctly', () => {
    expect(messagesComponentTree).toMatchSnapshot();
  });
  it('renders with correct props', () => {
    expect(messagesComponent.props).toEqual(mock);
  });
});
