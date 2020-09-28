import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ResultList from './components/ResultList';
import store from './store/store-config';
import { Provider } from 'react-redux';
import './assets/styles.css';

const Router = (props) => (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path={`/search/:searchText`} component={ResultList} />
      </Switch>
    </BrowserRouter>
  </Provider>

)
export default Router;