import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

// import App, from './App.js';

import '../Styles/index.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
 <div>
      <header>
          <div className="home"><NavLink to="/HomePage">Home Page</NavLink></div>

          <div className="about"><NavLink to="/AboutPage">About Page</NavLink></div>

          <div className="portfolio"><NavLink to="/Portfolio">Portfolio</NavLink></div>
      </header>

  <section className="content">
  {this.props.children}
  </section>

  <footer>
   <a href="https://www.georgiatardyart.com"> Website </a>
  </footer>
</div>

    );
  }
}
