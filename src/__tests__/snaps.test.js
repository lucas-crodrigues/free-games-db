import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Home from '../pages/Home';
import Details from '../pages/Details';

describe('check snapshot of pages', () => {
  test('check snapshot of home', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check snapshot of details', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Details />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    expect(component).toMatchSnapshot();
  });
});
