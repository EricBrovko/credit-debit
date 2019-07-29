import React, { Fragment } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { omit } from 'lodash';

import NavigationMenu from "../navigation/navigation_menu.component";

import Login from '../login';
import Home from '../home';
import NotFoundPage from '../notFound';

import { isAuthenticated } from '../../helper/auth';


const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const About = () => <div>About</div>

const AuthRoute = props => {
  const rest = omit(props, 'component');
  const Component = props.component;
  const isAuthenticatedUser = props.isAuthenticatedUser;

  return isAuthenticatedUser
    ? <Route {...rest} render={routeProps => <Component {...routeProps} />} />
    : <Route {...rest} render={() => <Redirect to={{ pathname: '/login' }} />} />;
}

const AppRouter = (props) => {
  const isAuthenticatedUser = isAuthenticated();

  return (
    (
      <Router history={history}>
        <Fragment>
          <NavigationMenu isAuthenticatedUser={isAuthenticatedUser} />
          <Switch>
            {
              !isAuthenticatedUser && (
                <Route exact path="/login" component={Login} />
              )
            }
            <AuthRoute
              isAuthenticatedUser={isAuthenticatedUser}
              exact
              path="/"
              component={Home}
            />
            <AuthRoute
              isAuthenticatedUser={isAuthenticatedUser}
              exact
              path="/about"
              component={About}
            />
            <AuthRoute
              isAuthenticatedUser={isAuthenticatedUser}
              component={NotFoundPage}
            />
          </Switch>
        </Fragment>
      </Router>
    )
  );
};

export default AppRouter;