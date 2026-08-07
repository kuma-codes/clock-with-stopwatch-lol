import React from 'react';
import Stopwatch from './Stopwatch.jsx';
import DigitalClock from './DigitalClock.jsx'



function App() {
  return (
    <div className = 'flex flex-col justify-center items-center min-h-screen gap-8'>
      <DigitalClock/>
      <Stopwatch/>
    </div>

  );
}

export default App;
