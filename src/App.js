import React, {createContext} from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import More from './components/More';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Child from './components/Child';
import Welcome from './components/Welcome';
import Hooks from './components/Hooks';
import Form from './components/Form';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export const RootContext = createContext();


function App() {

  const data = {
    number: 9813,
    text: "Ankit",
    func: () => {
      alert("Hello! Welcome to a new World");
    },
  };

  return (

    <div >
      
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="more" element={<More />}  />

      </Routes>

      <Navbar />
      <Welcome />
      
    </Router>
    <RootContext.Provider value={data}>
      <Child />
    </RootContext.Provider>

      <Register />
      <Hooks/> 
      <Form />
    </div> 
  );
}

export default App;
