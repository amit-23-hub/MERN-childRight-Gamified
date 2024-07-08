import React from 'react' ;
import Quiz from './quiz';
import './Level2.css'
import audio from '../../../assets/audio.mp3'
export default function Level2() {
  return (
    
    <div className="center-content">
      <div className="question-img">
        <audio src={audio} controls>
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="animated-text">
        <h2>Answer the question related to this audio...</h2>
      </div>
      <Quiz />
    </div>
  
  )
}
