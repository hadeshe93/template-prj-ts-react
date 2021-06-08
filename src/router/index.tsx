import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/index'));

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
