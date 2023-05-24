import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import Landing from './Landing';
import data from './data/hawaiibeaches.json';
import CardPage from './CardPage';
import Nav from './Nav';
import LocationPage from './LocationPage';
import Donate from './Donate';
import Learn from './Learn';
export default function App(props) {
  let [selectedData, setSelectedData] = useState();


  return (
    <div id="root">
      <Nav />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Search" element={<CardPage data={data} selectedData={selectedData} setSelectedData={setSelectedData}/>} />
        <Route path="/Search/LocationPage" element={<LocationPage data={data} selectedData={selectedData} setSelectedData={setSelectedData}/>} />
        <Route path="/Learn" element={<Learn/>} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </div>
  );
}
