import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';

const routes = (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/movie/:id" component={Movie} />
    <Route exact path="/directors" component={Directors} />
    <Route exact path="/actors" component={Actors} />
  </>
);

export default routes;
