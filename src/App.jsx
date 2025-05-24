import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Homepage from './pages/HomePage.jsx';

const App = () => {
  return (
    <div>
       <Navbar />
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;