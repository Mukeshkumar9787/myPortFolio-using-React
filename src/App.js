import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index element= {<Home/>} />
          <Route path='projects' element= {<Projects/>} />
          <Route path='contact' element= {<Contact/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
