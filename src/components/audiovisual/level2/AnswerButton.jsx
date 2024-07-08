import React from 'react';
import './Level2.css';

function AnswerButton({ text, status, onClick }) {
    let buttonClass = 'btn';
    if (status === 'correct') {
        buttonClass += ' correct';
    } else if (status === 'wrong') {
        buttonClass += ' wrong';
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}

export default AnswerButton;
