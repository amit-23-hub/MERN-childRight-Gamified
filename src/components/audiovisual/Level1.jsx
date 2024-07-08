import React, { useState } from 'react';
import './level1.css'; // Import your CSS file

const Level1 = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const questions = [
    {
      question: 'It is related to which of the child rights?',
      answers: [
        { text: 'Education', correct: false },
        { text: 'Health', correct: true },
        { text: 'Poverty', correct: false }
      ]
    },
    {
      question: 'Is health-care right of every child?',
      answers: [
        { text: 'No, It is for only rich children.', correct: false },
        { text: 'No', correct: false },
        { text: 'No, It is for well privileged.', correct: false },
        { text: 'Yes , It is a basic right of every child.', correct: true }
      ]
    },
    {
      question: 'All children have the right to_______',
      answers: [
        { text: 'get best health-care facility possible.', correct: true },
        { text: 'free will to get drugged.', correct: false },
        { text: 'never go to hospital.', correct: false }
      ]
    },
    {
      question: 'Which right is concluded by this image?',
      answers: [
        { text: 'Right to Education', correct: false },
        { text: 'Right to health', correct: true },
        { text: 'Right to facility', correct: false }
      ]
    }
  ];

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameEnded(false);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const selectAnswer = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      setGameEnded(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="center-content">
        <div className="question-img">
          <img src="https://img.freepik.com/premium-vector/doctor-vaccinating-toddler-boy_316839-5058.jpg" alt="" />
        </div>
        <div className="animated-text">
          <h1>Answer questions related to this image...</h1>
        </div>
        <div className="container">
          {!gameStarted ? (
            <button id="start-btn" className="start-btn btn" onClick={startGame}>
              Start
            </button>
          ) : gameEnded ? (
            <div id="score-container">
              <p>Score: {score}</p>
              <button id="restart-btn" className="restart-btn btn" onClick={startGame}>
                Restart
              </button>
            </div>
          ) : (
            <div id="question-container">
              <div style={{color:'black'}}>{questions[currentQuestionIndex].question}</div>
              <div className="btn-grid" id="answer-buttons">
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                  <button
                    key={index}
                    className="btn"
                    onClick={() => selectAnswer(answer.correct)}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
              {currentQuestionIndex < questions.length - 1 && (
                <button id="next-btn" className="next-btn btn" onClick={nextQuestion}>
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Level1;
