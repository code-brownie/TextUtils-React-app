import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';

function App() {
  const [mode, Setmode] = useState('light');
  const togglemode = () => {
    if (mode === "light") {
      Setmode('dark');
      document.body.style.backgroundColor = '#343a40';
    } else {
      Setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
      <Navbar title="Textutils" mode={mode} chmode={togglemode} />
      <Textarea heading="Enter The Text To Analyse" mode={mode} />
    </div>
  );
}

export default App;
