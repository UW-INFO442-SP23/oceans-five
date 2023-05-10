import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Landing from './Landing';
import data from './data/hawaiibeaches.json';
import CardPage from './CardPage';
import Nav from './Nav';
export default function App(props) {



  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Search" element={<CardPage data={data} />} />
      </Routes>
    </div>
  );
}
