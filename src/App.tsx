import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Not-Found/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />

          <Route path='shop' element={<Home />}>
            <Route path=":shopId" element={<Home />} />
          </Route>

          <Route path='about-us' element={<Home />} />
          <Route path='contact-us' element={<Home />} />
          <Route path='login' element={<Home />} />

          <Route path='/dashboard' element={<Dashboard /> } />


          <Route path='shop' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
