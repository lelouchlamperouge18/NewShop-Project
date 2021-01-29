import React, {Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './features/header/Header';  
import './App.css';

import { New } from './pages/new/New';
import { Contact } from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading..........</div>}> 
        <BrowserRouter>
          <Header /> 

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Switch>
            {/* <Route path="/" component={<div>HOMEPAGE</div>} /> */}
            <Route path="/new" component={New} />
            <Route path="/men" component={Counter} />     
            <Route path="/women" component={Counter} />
            <Route path="/couple" component={Counter} />   
            <Route path="/contact" component={Contact} />
          </Switch>

        </BrowserRouter>
      </Suspense>    
      

    </div>
  );
}

export default App;
