import React from "react";
import Catalog from './views/Catalog/Catalog';
import Home from './views/Home/Home';
import ItemView from './views/ItemView/ItemView';
import About from './views/About/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/item/:id" component={ItemView}/>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
