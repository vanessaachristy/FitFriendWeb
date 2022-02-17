import React from "react";

import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Programs from "./components/programs/Programs";
import Workout from "./components/workout/Workout";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App(){
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/blog" element={<Programs/>}/>
        <Route path="/shop" element={<Programs/>}/>
        <Route path="/about" element={<Programs/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
