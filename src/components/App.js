import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNews from '../pages/BadgeNews';
import Badges from '../pages/Badges';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNews} />
      </Switch>
    </BrowserRouter>
  );
}
