import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Downloader from './Downloader';

export default function App() {
  return (
    <Provider store={store}>
      <Downloader />
    </Provider>
  );
}
