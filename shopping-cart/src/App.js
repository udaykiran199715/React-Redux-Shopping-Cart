import React from 'react';
import Navbar from "./components/Navbar"
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Cart  from "./components/Cart";
import Order  from "./components/Order";
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div >
        <Navbar />
        <Switch>
            {/* <Route path='/'  component={<Home />} /> */}
            <Route path="/" exact render={() =>   <Home />} />
              <Route path='/cart' exact render= {() => <Cart />}/>
              <Route path='/orders' exact render= {() => <Order />}/>
              <Route path='/products' exact render= {() => <Products/>}/>
              <Route path='/products/add' exact render= {() => <AddProduct/>}/>
              <Route path='/product/:id/edit'exact render= {(props) => <EditProduct {...props}/>}/>

              {/* <Route path='/login' exact render= {() => <div>login</div>}/> */}
          </Switch>
    </div>
  );
}

export default App;
