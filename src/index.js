import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Login from "./components/Login"
import Main from './components/Main'
import Header from "./components/Header"
import './index.css'
import Register from './components/Register';
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element ={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='homepage' element={<Main />} />
        <Route path='header' element={<Header />} />
        <Route path='homepage' element={<Main />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

