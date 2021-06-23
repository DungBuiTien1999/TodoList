import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Todo from './views/Todo';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route exact path="/" render={() => <Todo />} /> */}
        <PrivateRoute path="/">
          <Todo />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.todoApp_accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              // state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
