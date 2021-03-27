import React, {Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import { Header } from './features/header/Header';  
import { Footer } from './features/footer/Footer';  
import './App.css';

import { Homepage } from './pages/homepage/Homepage';
import { New } from './pages/new/New';
import { Contact } from './pages/contact/Contact';
import { Cartpage } from './pages/cartpage/Cartpage';
import { Singlepostpage } from './pages/singlepostpage/Singlepostpage';
import { Singlesubcategorypage } from './pages/singlesubcategorypage/Singlesubcategorypage';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading..........</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/new" component={New} />
            <Route path="/contact" component={Contact} />
            <Route path="/cartpage" component={Cartpage} />
            <Route exact path="/products/:productID" component={Singlepostpage} />

            <Route path="/clothes/shirt" component={Singlesubcategorypage} />
            <Route path="/clothes/cosplay" component={Singlesubcategorypage} /> 
            <Route path="/figure/single" component={Singlesubcategorypage} />
            <Route path="/figure/combo" component={Singlesubcategorypage} />
            <Route path="/others-accessories/balo" component={Singlesubcategorypage} />  
            <Route path="/others-accessories/jewelry" component={Singlesubcategorypage} /> 
            <Route path="/others-accessories/stuffedtoy" component={Singlesubcategorypage} />  
            <Route path="/others-accessories/others" component={Singlesubcategorypage} /> 
          </Switch>

          <Footer />
        </BrowserRouter> 
      </Suspense>    
    </div>
  );
}

export default App; 
