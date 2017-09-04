import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './Components/BaseLayout';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import Portfolio from './Components/Portfolio';
import App from './Components/App';

ReactDOM.render(
<BrowserRouter>
 <BaseLayout>
   <Switch>
      <Route path="/HomePage" component={HomePage} />
      <Route path="/AboutPage" component={AboutPage} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route exact="/" component={App} />
   </Switch>
  </BaseLayout>
</BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
