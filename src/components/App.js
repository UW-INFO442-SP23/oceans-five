import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Landing from './Landing';
import data from './data/hawaiibeaches.json';
import CardPage from './CardPage';
import Nav from './Nav';
import Donate from './Donate';
import Learn from './Learn';
export default function App(props) {



  return (
    <div id="root">
      <Nav />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Search" element={<CardPage data={data} />} />
        <Route path="/Learn" element={<Learn/>} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </div>
  );
}
