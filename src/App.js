import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Register from 'pages/Register';
import ForgotPassword from 'pages/ForgotPassword';
import ResetPassword from 'pages/ResetPassword';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={Main} />
        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
        <Route path="/forgot-password" render={ForgotPassword} />
        <Route path="/reset-password" render={ResetPassword} />
      </Switch>
    </Router>
  );
};

export default App;
