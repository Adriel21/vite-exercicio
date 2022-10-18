// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Cabecalho from './components/layout/Cabecalho';
import Home from './pages/Home';
import Rodape from './components/layout/Rodape';
import Produtos from "./pages/Produtos";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Cabecalho/>

        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
        </Switch>

        <Rodape />
      </BrowserRouter>      
    </>
  );
};

export default App;
