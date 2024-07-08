import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './Listening.css'; 

const Storytelling = () => {
    const [speaking, setSpeaking] = useState(false);
    let speech = null;

    const speakText = () => {
        const text = document.querySelector('p').textContent;
        if (speaking) {
            // If speech is already in progress, stop it
            speechSynthesis.cancel();
            setSpeaking(false);
        } else {
            // If speech is not in progress, start it
            speech = new SpeechSynthesisUtterance(text);
            speech.rate = 0.80; // Adjust the speech rate as needed (1.0 is the default)
            speechSynthesis.speak(speech);
            setSpeaking(true);
        }
    };

    return (
        <div className="container">
            <h1>STORY TELLING</h1>
            <div className="box">
                <h2>"ABANDONED CHILD"</h2>
                <div className="imgs">
                    <FontAwesomeIcon icon={faVolumeUp} className="sound-icon" onClick={speakText} />
                </div>
                <p style={{color:'black'}}>
                    Rohan, a brilliant boy in studies but due to financial condition of the family he was often discarded from attending the classes. He used to attend classes from outside just listening to the teacher from window and often get scolded for his
                    interruption in answering the questions. His hard work and dedication had left no stone unturned and he successfully qualified ICS examination and had worked very hard on children education and made free education to children upto and also
                    raised the standard of government schools,
                </p>
                <button><a href="">NEXT</a></button>
            </div>
        </div>
    );
};

export default Storytelling;
