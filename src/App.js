import React from 'react';
import logo from './logo.svg';
import './App.css';
import Line from './component/Line'
import Bargraphs from './component/Bargraphs'
import Piecharts from './component/Piecharts'

function App() {
  return (
    <div className="App">
      <Line></Line>
      <Bargraphs></Bargraphs>
      <Piecharts></Piecharts>
      
    </div>
  );
}

export default App;
