import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import App, from './App.js';

import '../Styles/index.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="container-fluid">
      <nav>
          <Link  activeClassName="selected" to="/HomePage">Home</Link>

          <Link  activeClassName="selected" to="/AboutPage">About</Link>

          <Link  activeClassName="selected" to="/Portfolio">Portfolio</Link>
      </nav>

  {this.props.children}
     </div>


    );
  }
}
