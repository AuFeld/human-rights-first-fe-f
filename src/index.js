import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.less';

import reducer from './state/reducers/';
import { Loading } from './components/common/Loading';
import NavBar from './components/common/NavBar';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { FiltersForm } from './components/common/FilterForm.js';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Loading} />
    </Router>
  );
}
