import React, {useEffect} from "react";
import Catalog from './views/Catalog/Catalog';
import Home from './views/Home/Home';
import ItemView from './views/ItemView/ItemView';
import About from './views/About/About';
import InvalidView from './views/InvalidView/InvalidView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './common/ScrollToTop';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomColor } from './common/helper';

function App() {
  const dispatch = useDispatch();
  const masterKey = useSelector(state => state.masterKey);
  let superMode = useSelector(state => state.superMode);
  useEffect(()=> {
    document.title="Gymbo Guice Online Store";
  }, [])

  useEffect(() => {
    let timer = null;

    if (superMode) {
      timer = setInterval(() => {
        dispatch({type: 'updateKey'});
      }, 400);
    }
    return () => {clearInterval(timer)};
  }, [superMode]);

  let timer = null;
  return (
    <Router>
      <ScrollToTop />
      <div key={masterKey} style={getRandomColor()}>
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/item/:id" component={ItemView}/>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/">
            <InvalidView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
