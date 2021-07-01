import React, { Component } from 'react';
import {Switch ,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Foot from './components/foot';

class App extends Component{
render() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Productlist}/> 
        <Route path="/details" component={Details}/> 
        <Route path="/cart" component={Cart}/> 
        <Route  component={Default}/> 

      </Switch>
      <Modal />
      <Foot/>
   
    </React.Fragment>
  );
}
}
export default App;
