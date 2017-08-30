import React, { Component } from 'react';

import '../Styles/App.css';

import BaseLayout from './BaseLayout';
import AboutPage from './AboutPage';
import Portfolio from './Portfolio';
import HomePage from './HomePage';


class App extends Component {
  render() {
    return (

      <div>
      <HomePage />
      <BaseLayout />
      <AboutPage />
      <h1>App Page</h1>
      <Portfolio />
      </div>


    );
  }
}

export default App;
