import React, { useState } from 'react';
import Question from './Question';
import './Level2.css';

const questions = [
    {
        question: "What can be the long-term impact of child sexual abuse on its victims?",
        answers: [
            { text: "Physical well-being", correct: false },
            { text: "Psychological and emotional trauma", correct: true },
            { text: "Improved resilience", correct: false }
        ]
    },
    {
        question: "How can child sexual abuse be prevented?",
        answers: [
            { text: "Ignoring the issue", correct: false },
            { text: "Education, awareness, and legal measures", correct: true },
            { text: "Punishing the victims", correct: false }
        ]
    },
    {
        question: "When you suspect child sexual abuse, what should you do?",
        answers: [
            { text: "Ignore it to avoid trouble", correct: false },
            { text: "Report it to the appropriate authorities", correct: true },
            { text: "Confront the abuser directly", correct: false }
        ]
    },
    {
        question: "Which type of abuse involves the sexual exploitation of minors using the internet?",
        answers: [
            { text: "Cyberbullying", correct: false },
            { text: "Online grooming", correct: true },
            { text: "Physical abuse", correct: false }
        ]
    },
    {
        question: "Why is supporting victims and their families important in addressing child sexual abuse?",
        answers: [
            { text: "It helps victims get revenge on their abusers", correct: false },
            { text: "It is not important, as the victims should forget about the abuse", correct: false },
            { text: "It is crucial for their recovery and well-being", correct: true }
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
