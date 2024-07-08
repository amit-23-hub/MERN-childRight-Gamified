import React from 'react';
import Quiz from './quiz';
import './Level3.css';
import video from '../../../assets/school.mp4'
export default function Level3() {
    return (
    
            <div className="center-content">
                <div className="question-img">
                    <video src={video} controls width="100%">
                        Your browser does not support the video element.
                    </video>
                </div>
                <div className="animated-text">
                    <h2>Answer the question related to this video...</h2>
                </div>
                <Quiz />
            </div>
        
    );
}

