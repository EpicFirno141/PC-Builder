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
import OnlyThisUser from '../ProtectedRoute/OnlyThisUser';

import PCList from '../PCList/PCList';
import Profile from '../Profile/Profile';
import LoginPage from '../LoginPage/LoginPage';
import ChangeDetails from '../EditPC/ChangeDetails';
import ViewPC from '../ViewPC/ViewPC';
import EditPC from '../EditPC/EditPC';
import Footer from '../Footer/Footer';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { red, purple, deepPurple, indigo, lightBlue, cyan, green, lime, orange } from '@mui/material/colors';
import SearchGPU from '../Search/SearchGPU';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: lightBlue[300],
    },
    remove: {
      main: red[700],
    },
    view: {
      main: cyan[300],
    },
    red: {
      main: red[500],
    },
    purple: {
      main: purple[500],
    },
    deepPurple: {
      main: deepPurple[500],
    },
    indigo: {
      main: indigo[500],
    },
    lightBlue: {
      main: lightBlue[500],
    },
    green: {
      main: green[500],
    },
    lime: {
      main: lime[500],
    },
    orange: {
      main: orange[500],
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
          {/* The Nav bar at the top of the page */}
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
              path="/search/gpu"
            >
              <SearchGPU />
            </ProtectedRoute>
        
            <ProtectedRoute
              exact
              path="/view/:id"
            >
              <OnlyThisUser>
                <ViewPC />
              </OnlyThisUser>
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/edit/:id"
            >
              <OnlyThisUser>
                <EditPC />
              </OnlyThisUser>
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/details/:id"
            >
              <OnlyThisUser>
                <ChangeDetails />
              </OnlyThisUser>
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
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
