// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Cabecalho from './components/layout/Cabecalho';
import Home from './pages/Home';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Cabecalho/>

        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
        </Switch>
      </BrowserRouter>      
    </>
  );
};

export default App;
