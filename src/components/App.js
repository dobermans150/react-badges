import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BadgeNews from '../pages/BadgeNews';
import Badges from '../pages/Badges';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNews} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
