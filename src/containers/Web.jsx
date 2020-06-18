import React  from 'react'

import Product from '../components/Product/Product'
import MainLayout from '../components/Layouts/MainLayout';
import Login from '../components/Login/Login';

const Web = () => {
  return (
    <MainLayout>
       <Product />
       <Login />
    </MainLayout>

  );
}

export default Web;