import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import storeReducer from './redux/configureStore';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={storeReducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
