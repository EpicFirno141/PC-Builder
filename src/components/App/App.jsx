import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import PCList from '../PCList/PCList';
import Profile from '../Profile/Profile';
import LoginPage from '../LoginPage/LoginPage';
import ViewPC from '../ViewPC/ViewPC';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { lightBlue, purple } from '@mui/material/colors';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: lightBlue[300],
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/list" />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/profile"
            >
              <Profile />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/list"
            >
              <PCList />
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path="/view/:id"
            >
              <ViewPC />
            </ProtectedRoute>
            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/profile" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
