import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import Product_Details from '../components/products_list/Product_Details';

export default function PagesRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product-details/:proID' element={<Product_Details/>}/>
      </Routes>
    </Router>
  )
}
