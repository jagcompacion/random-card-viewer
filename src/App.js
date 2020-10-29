import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from 'components/Topbar';
import Home from 'pages/Home';

const App = () => (
  <>
    <Topbar />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
