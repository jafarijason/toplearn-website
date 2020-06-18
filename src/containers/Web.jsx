import React from 'react'

import Product from '../components/Product/Product'
import { Switch, Route } from 'react-router-dom'

import MainLayout from '../components/Layouts/MainLayout';
import Login from '../components/Login/Login';
import Register from './../components/Register/Register';
import Archive from '../components/Product/Archive';

const Web = () => {
  return (
    <MainLayout>
      <Switch >
        <Route path="/login"  component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/archive" exact component={Archive} />
        <Route path="/" exact component={Product} />
      </Switch>
    </MainLayout>

  );
}

export default Web;