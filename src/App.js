import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Nav/>
    <Fragment>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch}/>
      </Switch>
    </Fragment>
  </>
);

export default App;
