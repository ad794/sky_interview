import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../Message';

import { findById } from '../../utils';

describe('message component', () => {
  const mock = {
    message: 'mockdata',
    timestamp: '2016-11-09T05:04:58Z',
    member: { email: 'test@test.com' }
  };
  const messageComponentTree = renderer.create(<Message {...mock} />).toJSON();
  const messageComponent = renderer.create(<Message {...mock} />).getInstance();
  test('renders correctly', () => {
    expect(messageComponentTree).toMatchSnapshot();
  });

  it('renders with correct props', () => {
    expect(messageComponent.props).toEqual(mock);
  });

  it('renders and displays correct message text ', () => {
    const element = findById(messageComponentTree, 'messageText');
    expect(element).toBeDefined();
    expect(element.children[0]).toBe(mock.message);
  });

  it('set correct state on onPressIn and onPressOut handlers', () => {
    messageComponent.onPressInHandler();
    expect(messageComponent.state.showEmail).toEqual(true);
    messageComponent.onPressOutHandler();
    expect(messageComponent.state.showEmail).toEqual(false);
  });
});
