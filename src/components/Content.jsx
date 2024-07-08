import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';
import storytellingImg from '../assets/3.png';
import puzzleImg from '../assets/4.jpg';
import spotExploitationImg from '../assets/spot the exp.jpg';
import audioVisualImg from '../assets/6.png';
import quizImg from '../assets/5.png';
import dictionaryImg from '../assets/7.png';

function Content() {
  return (
    <div className="content">
      <div className="item">
        <Link to="/storytelling"><img src={storytellingImg} alt="Storytelling Mode" /></Link>
      </div>
      <div className="item">
       <a href="https://polite-treacle-907553.netlify.app/">
  <img src={puzzleImg} alt="Puzzle Mode" />
</a>
      </div>
      <div className="item">
        <Link to="/spot-the-exploitation"><img src={spotExploitationImg} alt="Spot the Exploitation Mode" /></Link>
      </div>
      <div className="item">
        <Link to="/audio-visual"><img src={audioVisualImg} alt="Audio-Visual Mode" /></Link>
      </div>
      <div className="item">
        <Link to="/quiz"><img src={quizImg} alt="Quiz Mode" /></Link>
      </div>
      <div className="item">
        <Link to="/dictionary"><img src={dictionaryImg} alt="Dictionary Mode" /></Link>
      </div>
    </div>
  );
}

export default Content;
