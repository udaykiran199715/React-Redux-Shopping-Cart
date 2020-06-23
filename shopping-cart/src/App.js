import React from 'react';
import Navbar from "./components/Navbar"
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div >
        <Navbar />
        <Switch>
            {/* <Route path='/'  component={<Home />} /> */}
            <Route path="/" exact render={() =>   <Home />} />
              {/* <Route path='/addProduct' exact render= {() => <div>add product</div>}/>
              <Route path='/cart' exact render= {() => <div>cart</div>}/>
              <Route path='/orders' exact render= {() => <div>orders</div>}/>
              <Route path='/product/:id'exact render= {() => <div> product</div>}/>
              <Route path='/login' exact render= {() => <div>login</div>}/> */}
          </Switch>
    </div>
  );
}

export default App;
