import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const togglePHandler = useCallback(() => {
    if (allowToggle) {
      setShowP(prevShowP => !prevShowP);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={togglePHandler}>Toggle P!</Button>
    </div>
  );
}

export default App;
