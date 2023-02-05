import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Test from '../pages/Test';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Login from '../pages/Login';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
