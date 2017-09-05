import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Timer  from './containers/Timer';
import Projects  from './components/Projects';
import Project  from './containers/Project';
import reducers from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import { timerMiddleware } from './middleware/timer_middleware';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(timerMiddleware, thunk, promise))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='wrapper'>
        <NavBar />
        <Switch>
          <Route path='/projects/:id' component={Project} />
          <Route path='/projects' component={Projects} />
          <Route path='/' component={Timer} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
