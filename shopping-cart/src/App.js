import React from 'react';
import Navbar from "./components/Navbar"
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Cart  from "./components/Cart";
import Order  from "./components/Order";

function App() {
  return (
    <div >
        <Navbar />
        <Switch>
            {/* <Route path='/'  component={<Home />} /> */}
            <Route path="/" exact render={() =>   <Home />} />
              <Route path='/cart' exact render= {() => <Cart />}/>
              <Route path='/orders' exact render= {() => <Order />}/>
              {/* <Route path='/addProduct' exact render= {() => <div>add product</div>}/>
              <Route path='/product/:id'exact render= {() => <div> product</div>}/>
              <Route path='/login' exact render= {() => <div>login</div>}/> */}
          </Switch>
    </div>
  );
}

export default App;
