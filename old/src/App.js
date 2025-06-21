import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Projects from './components/Projects';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/projects'>
            <Route index element={<Projects/>}/>
            <Route path='project1' element={<div>p1</div>}/>
            <Route path='project2' element={<div>p2</div>}/>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;