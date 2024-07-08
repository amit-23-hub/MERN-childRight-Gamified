import React, { useState } from 'react';
import Question from './Question';
import './Level3.css';

const questions = [
    {
        question: 'It is related to which of the child rights?',
        answers: [
          { text: ' Education', correct: true },
          { text: 'Health', correct: false },
          { text: 'Poverty', correct: false }    ]
      },
      {
        question: 'Is education right of every child?',
        answers: [
          { text: 'No,It is for only rich children.', correct: false },
          { text: 'No', correct: false },
          { text: 'No, It is for well privileged.', correct: false},
          { text: 'Yes , It is a basic right of every child.', correct: true }
        ]
      },
      {
        question: 'All children have the right to_______',
        answers: [
          { text: 'best education possible.', correct: true },
          { text: 'free will to study.', correct: false },
          { text: 'never go to school.', correct: false }
        ]
      },
      {
        question: 'which right is concluded by this image?',
        answers: [
          { text: 'Right to Education', correct: true },
          { text: 'Right to health', correct: false },
          {text: 'Right to facility', correct:false}
        ]
      
    }
];

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [answerStatuses, setAnswerStatuses] = useState(
        Array.from({ length: questions.length }, () => [])
    );

    const handleAnswerButtonClick = (isCorrect, answerIndex) => {
        const newStatuses = [...answerStatuses];
        const currentStatuses = Array.from(questions[currentQuestionIndex].answers, (_, i) =>
            i === answerIndex ? (isCorrect ? 'correct' : 'wrong') : (questions[currentQuestionIndex].answers[i].correct ? 'correct' : null)
        );
        newStatuses[currentQuestionIndex] = currentStatuses;
        setAnswerStatuses(newStatuses);

        setShowNextButton(true);

        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextButtonClick = () => {
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setShowNextButton(false);
        } else {
            setShowScore(true);
        }
    };

    const handleRestartButtonClick = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
        setShowNextButton(false);
        setAnswerStatuses(Array.from({ length: questions.length }, () => []));
    };

    return (
        <div className="container">
            {showScore ? (
                <div id="score-container">
                    <p>Score: {score}</p>
                    <button onClick={handleRestartButtonClick} className="restart-btn btn">Restart</button>
                </div>
            ) : (
                <div id="question-container">
                    <Question
                        question={questions[currentQuestionIndex].question}
                        answers={questions[currentQuestionIndex].answers}
                        onAnswerClick={handleAnswerButtonClick}
                        statuses={answerStatuses[currentQuestionIndex]}
                    />
                    {showNextButton && (
                        <button onClick={handleNextButtonClick} className="nextbtn">Next</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quiz;
