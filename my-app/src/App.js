import React, {Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Header } from './features/header/Header';  
import './App.css';

import { Homepage } from './pages/homepage/Homepage';
import { New } from './pages/new/New';
import { Contact } from './pages/contact/Contact';
import { Cartpage } from './pages/cartpage/Cartpage';
import { Singlepostpage } from './pages/singlepostpage/Singlepostpage';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading..........</div>}> 
        <BrowserRouter>
          <Header /> 

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/new" component={New} />
            <Route path="/men" component={Counter} />     
            <Route path="/women" component={Counter} />
            <Route path="/couple" component={Counter} />   
            <Route path="/contact" component={Contact} />
            <Route path="/cartpage" component={Cartpage} />
            <Route exact path="/products/:productID" component={Singlepostpage} />
          </Switch>

        </BrowserRouter>
      </Suspense>    
    </div>
  );
}

export default App; 
