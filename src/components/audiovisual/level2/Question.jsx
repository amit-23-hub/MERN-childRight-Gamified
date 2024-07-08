import React from 'react';
import AnswerButton from './AnswerButton';
import './Level2.css';

function Question({ question, answers, onAnswerClick, statuses }) {
    return (
        <div>
            <div id="question">{question}</div>
            <div id="answer-buttons" className="btn-grid">
                {answers.map((answer, index) => (
                    <AnswerButton
                        key={index}
                        text={answer.text}
                        isCorrect={answer.correct}
                        onClick={() => onAnswerClick(answer.correct, index)}
                        status={statuses ? statuses[index] : null}
                    />
                ))}
            </div>
        </div>
    );
}

export default Question;
