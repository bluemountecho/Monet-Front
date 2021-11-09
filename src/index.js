import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/css/app.css';
import Header from './Components/Header/header.js';
import Footer from './Components/Footer/footer.js';

const Home = lazy(() => import('./Components/Home/home.js'));
const Blog = lazy(() => import('./Components/Blog/blog.js'));

ReactDOM.render(
  <>
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
    </Suspense>
    <Footer />
  </Router>
  </>,
  document.getElementById('root')
);