import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

import Home from '../views/Home';

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/page1" component={Home}/>
    </div>
  </Router>
);

export default routes;