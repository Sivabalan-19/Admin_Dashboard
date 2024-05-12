import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Coruse from './pages/Coruse/Coruse';
import Report from './pages/Report/Report';

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/course' element={<Coruse/>} />
        <Route path='/report' element={<Report/>} />
      </Routes>
    </Router>
  </>
  );
}
export default App;