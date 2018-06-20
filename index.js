import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import { store } from './src/store';

export const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent('reactNativeInterview', () => Application);
