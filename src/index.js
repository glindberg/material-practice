// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "../src/components/App";
// // ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.querySelector('#app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
// import Button from '@material-ui/core/Button';

import SignIn from './components/SignIn';
import NavBar from './components/Navbar';
import Blog from './components/Blog';
import ProfilePage from './components/Profile';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BLOG} component={Blog} />
      <Route path={ROUTES.NAVBAR} component={NavBar} />
      <Route path={ROUTES.SIGNIN} component={SignIn} />
      <Route path={ROUTES.PROFILEPAGE} component={ProfilePage} />

      {/* <NavBar/> */}
      {/* <SignIn/> */}
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
