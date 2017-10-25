import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import routes  from './routes';
import store from './redux/configStore';

import './styles/rest.css'

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
