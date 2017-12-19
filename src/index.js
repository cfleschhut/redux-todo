import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import initialData from './data/todos';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp, initialData);

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
