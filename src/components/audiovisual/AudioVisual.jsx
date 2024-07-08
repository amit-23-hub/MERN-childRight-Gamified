import React from 'react';
import { Link } from 'react-router-dom';
import './AudioVisual.css'; 

const AudioVisual = () => {
  return (
    <div className="audiovisual-container">
      <h1 className="title">Audio Visual Levels</h1>
      <ul className="levels-list">
        <li className="level-item"><Link to="/AudioVisual/level1" className="level-link">Level 1</Link></li>
        <li className="level-item"><Link to="/AudioVisual/level2" className="level-link">Level 2</Link></li>
        <li className="level-item"><Link to="/AudioVisual/level3" className="level-link">Level 3</Link></li>
        
      </ul>
    </div>
  );
};

export default AudioVisual;
