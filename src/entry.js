import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Test from './components/test';
import Layout from './components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

require('./styles/style.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Test}/>
      <Route path="home" component={Test}/>
    </Route>
  </Router>
), document.getElementById('app'));
