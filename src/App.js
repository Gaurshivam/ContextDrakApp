import React, { createContext, useState } from 'react';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Profile from './Component/Profile';
import Service from './Component/Service';
import Contact from './Component/Contact';

export const ThemeContext = createContext(null);

const App = () => {
  const [Theme, setTheme] = useState("dark");
  const [title, settitle] = useState("Toggle Theme to light")

  const ThemeChange = () => {
    setTheme(
      (curr) => (curr === "light" ? "dark" : "light")
    )
    settitle(
      (curr) => (curr === "Toggle Theme to light" ? "Toggle Theme to Dark" : "Toggle Theme to light")
    )
  }
  return (
    <ThemeContext.Provider value={{title,Theme,ThemeChange}}>
      <div className='App' id={Theme}>
        <Navbar /><hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
