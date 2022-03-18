import { useState } from 'react';
import './App.css';
import Clock from './Clock.js';
import Saat from  './Saat.js';

function App() {
  const [goster, setGoster] = useState(true)
  return (
    <div className="App">
      <h1>Vakit Nakittir</h1>
      <input type="checkbox" checked={goster} onChange={(e)=> setGoster(e.target.checked)}/> Göster{goster? <Clock/>:null} 
      <Saat/>
      <Saat/>
      <Saat/>

    </div>
  );
}

export default App;
