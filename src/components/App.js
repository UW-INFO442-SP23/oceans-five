import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Landing from './Landing';


export default function App(props) {
  const data = [
    {
      title: "Cape May",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Ocean City",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Atlantic City",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Long Beach Island",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Seaside Heights",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Belmar",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Sandy Hook",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Asbury Park",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    },
    {
      title: "Point Pleasant Beach",
      temperature: "70",
      lowtide: "10:00am",
      hightide: "4:00pm",
      weather: "Sunny",
      wind: "10mph",
      waveheight: "2ft"
    }
  ]
 

  return (
    <div>
        <Routes>
          <Route index element={<Landing />} />
          {/* <Route path="/Home" element={<Navigate to="/home" />} />
          <Route path="/Search" element={<CardPage /> } />
          <Route path="/Learn" element={<h1>About</h1>} /> */}
        </Routes>
    </div>
  );
}
