import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="home">home</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
};
