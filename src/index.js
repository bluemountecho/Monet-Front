import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './assets/css/app.css';
import Header from './Components/Header/header.js';
import Footer from './Components/Footer/footer.js';

const Home = lazy(() => import('./Components/Home/home.js'));
const Blog = lazy(() => import('./Components/Blog/blog.js'));
const About = lazy(() => import('./Components/About/about.js'));

const App = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 600 };
	
	return(
    <>
    <Header />
    <Suspense fallback={<div>Loading1...</div>}>
      <TransitionGroup component="main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>      
    </Suspense>
    <Footer />
    </>
	);
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <>
  <Router>
    <AppWithRouter />
  </Router>
  </>,
  document.getElementById('root')
);