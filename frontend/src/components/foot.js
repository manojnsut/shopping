import React, { Component } from 'react';
import './foot.css';
export default class foot extends Component {
    render() {
        return (

            
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Veggi Pvt Ltd</h4>
          <h1 className="list-unstyled">
            <li>+1-9000000000</li>
            <li>Nwe Delhi</li>
            <li>INDIA</li>
          </h1>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Stuff</h4>
          <ui className="list-unstyled">
            <li>Veggies</li>
            <li>OTHER </li>
            <li>******</li>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>24/7 Service</h4>
          <ui className="list-unstyled">
            <li>100% Guaranteed Pure</li>
            
          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Veddies Pvt Ltd | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
);
    }
}


