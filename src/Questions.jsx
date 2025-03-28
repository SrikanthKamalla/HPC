import React, { useState, useEffect } from "react";
import "./Questions.css";

// Importing images (commented out since you're not currently using them)
// import LifestyleImage from "./assets/image1.jpg";
// import FoodHabitsImage from "./assets/image2.jpg";
// import ExerciseImage from "./assets/image3.jpg";
// import SleepPatternsImage from "./assets/image4.jpg";
// import MentalWellbeingImage from "./assets/image5.jpg";

const categories = [
  {
    name: "Lifestyle",
    questions: [
      {
        question: "How often do you exercise?",
        options: [
          "Daily (1 hour)",
          "Weekly (2-3 times)",
          "Rarely (once a month)",
          "Never (not at all)",
        ],
        scores: [4, 3, 2, 1],
      },
      {
        question: "Do you smoke?",
        options: ["Yes, regularly", "No, never"],
        scores: [0, 5],
      },
      {
        question: "How many hours do you work per day?",
        options: [
          "Less than 4 hours",
          "4-6 hours",
          "6-8 hours",
          "More than 8 hours",
        ],
        scores: [4, 3, 2, 1],
      },
      {
        question: "Do you feel stressed frequently?",
        options: [
          "Yes, almost daily",
          "No, rarely",
          "Sometimes, in tough situations",
        ],
        scores: [1, 4, 2],
      },
      {
        question: "How many hours do you spend on screens daily?",
        options: [
          "Less than 2 hours",
          "2-4 hours",
          "4-6 hours",
          "More than 6 hours",
        ],
        scores: [4, 3, 2, 1],
      },
    ],
  },
  {
    name: "Food Habits",
    questions: [
      {
        question: "How many servings of vegetables do you eat per day?",
        options: [
          "0-1 servings",
          "2-3 servings",
          "4-5 servings",
          "More than 5 servings",
        ],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you consume fast food often?",
        options: ["Yes, almost daily", "No, very rarely"],
        scores: [1, 5],
      },
      {
        question: "How much water do you drink daily?",
        options: [
          "Less than 1 liter",
          "1-2 liters",
          "2-3 liters",
          "More than 3 liters",
        ],
        scores: [1, 2, 3, 4],
      },
      {
        question: "How many meals do you eat per day?",
        options: ["1 meal", "2 meals", "3 meals", "More than 3 meals"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you consume sugary drinks daily?",
        options: [
          "Yes, every day",
          "No, never",
          "Occasionally, once in a while",
        ],
        scores: [1, 4, 2],
      },
    ],
  },
  {
    name: "Exercise",
    questions: [
      {
        question: "What type of exercise do you do most?",
        options: [
          "Cardio (running, cycling)",
          "Strength training (weights, resistance)",
          "Yoga and meditation",
          "None, I don't exercise",
        ],
        scores: [4, 4, 3, 1],
      },
      {
        question: "How long do you exercise per session?",
        options: [
          "Less than 15 minutes",
          "15-30 minutes",
          "30-45 minutes",
          "More than 45 minutes",
        ],
        scores: [1, 2, 3, 4],
      },
      {
        question: "How many days a week do you exercise?",
        options: ["0 days", "1-2 days", "3-4 days", "5 or more days"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you feel energetic after exercise?",
        options: [
          "Yes, very refreshed",
          "No, I feel exhausted",
          "Sometimes, depends on the workout",
        ],
        scores: [4, 1, 2],
      },
      {
        question: "Do you experience body pain due to lack of activity?",
        options: [
          "Yes, often",
          "No, not at all",
          "Occasionally, mild discomfort",
        ],
        scores: [1, 4, 2],
      },
    ],
  },
  {
    name: "Sleep Patterns",
    questions: [
      {
        question: "How many hours do you sleep per night?",
        options: [
          "Less than 4 hours",
          "4-6 hours",
          "6-8 hours",
          "More than 8 hours",
        ],
        scores: [1, 2, 4, 3],
      },
      {
        question: "Do you have trouble falling asleep?",
        options: [
          "Yes, every night",
          "No, I sleep easily",
          "Sometimes, on stressful days",
        ],
        scores: [1, 4, 2],
      },
      {
        question: "Do you wake up feeling refreshed?",
        options: [
          "Yes, always",
          "No, I wake up tired",
          "Sometimes, depends on sleep quality",
        ],
        scores: [4, 1, 2],
      },
      {
        question: "Do you use electronic devices before bed?",
        options: ["Yes, always", "No, I avoid screens at night"],
        scores: [1, 4],
      },
      {
        question: "How often do you wake up during the night?",
        options: ["Never, I sleep through", "1-2 times", "3 or more times"],
        scores: [4, 2, 1],
      },
    ],
  },
  {
    name: "Mental Well-being",
    questions: [
      {
        question: "How often do you feel anxious or stressed?",
        options: [
          "Daily, all the time",
          "Weekly, occasionally",
          "Rarely, only in tough situations",
          "Never, I am stress-free",
        ],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you engage in relaxation techniques?",
        options: [
          "Yes, regularly (meditation, breathing exercises)",
          "No, never",
          "Sometimes, when needed",
        ],
        scores: [4, 1, 2],
      },
      {
        question: "Do you feel socially connected with friends/family?",
        options: [
          "Yes, always in touch",
          "No, I feel isolated",
          "Occasionally, when I have time",
        ],
        scores: [4, 1, 2],
      },
      {
        question: "How would you rate your overall happiness?",
        options: [
          "Very unhappy (1)",
          "Somewhat unhappy (2)",
          "Neutral (3)",
          "Happy (4)",
          "Very happy (5)",
        ],
        scores: [1, 2, 3, 4, 5],
      },
      {
        question: "Do you struggle with focus and concentration?",
        options: [
          "Yes, I get distracted easily",
          "No, I am very focused",
          "Sometimes, depending on my mood",
        ],
        scores: [1, 4, 2],
      },
    ],
  },
];

const Questions = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const totalQuestionsCount = categories.reduce(
    (sum, category) => sum + category.questions.length,
    0
  );

  useEffect(() => {
    const answeredQuestions =
      currentCategoryIndex * categories[0].questions.length +
      currentQuestionIndex;
    const newProgress = (answeredQuestions / totalQuestionsCount) * 100;
    setProgress(newProgress);
  }, [currentCategoryIndex, currentQuestionIndex, totalQuestionsCount]);

  const totalScore = categories.reduce((sum, category) => {
    return (
      sum +
      category.questions.reduce((categorySum, question) => {
        return categorySum + Math.max(...question.scores);
      }, 0)
    );
  }, 0);

  const handleAnswerChange = (question, answer, scoreValue) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
    setScore((prev) => prev + scoreValue);
    setShowAlert(false);
  };

  const goToNextQuestion = () => {
    const category = categories[currentCategoryIndex];
    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      setIsCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (currentCategoryIndex > 0) {
      const prevCategory = categories[currentCategoryIndex - 1];
      setCurrentCategoryIndex((prev) => prev - 1);
      setCurrentQuestionIndex(prevCategory.questions.length - 1);
    }
  };

  const handleNextClick = () => {
    if (!answers[currentQuestion.question]) {
      setShowAlert(true);
      return;
    }
    goToNextQuestion();
  };

  if (isCompleted) {
    return (
      <div
        className="container"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <h2>Assessment Completed!</h2>
        <p>Thank you for your responses.</p>
        <p>
          Your score: {score} out of {totalScore}
        </p>
      </div>
    );
  }

  const currentCategory = categories[currentCategoryIndex];
  const currentQuestion = currentCategory?.questions[currentQuestionIndex];

  if (!currentCategory || !currentQuestion) {
    return (
      <div className="container">
        <h2>Assessment Completed!</h2>
        <p>Thank you for your responses.</p>
      </div>
    );
  }

  return (
    <div className="container">
      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert">
            <h3>Please Select an Option</h3>
            <p>You need to select an answer before proceeding.</p>
            <button onClick={() => setShowAlert(false)}>OK</button>
          </div>
        </div>
      )}

      <div className="tracker">
        <CategoryProgressBar categories={categories} progress={progress} />
      </div>
      <h3 className="category-name">{currentCategory.name}</h3>

      <div className="quesImg">
        <div className="question-content">
          <div className="question-text-container">
            <p id="questionP">{currentQuestion.question}</p>
          </div>

          <div className="options-scroll-container">
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={`${currentQuestion.question}-${option}`}
                  className="option-radio"
                >
                  <input
                    type="radio"
                    name={currentQuestion.question}
                    value={option}
                    checked={answers[currentQuestion.question] === option}
                    onChange={() =>
                      handleAnswerChange(
                        currentQuestion.question,
                        option,
                        currentQuestion.scores[index]
                      )
                    }
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="navigation-buttons">
            <button
              onClick={goToPreviousQuestion}
              disabled={
                currentCategoryIndex === 0 && currentQuestionIndex === 0
              }
            >
              Previous
            </button>
            <button onClick={handleNextClick}>
              {currentCategoryIndex === categories.length - 1 &&
              currentQuestionIndex === currentCategory.questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryProgressBar = ({ categories, progress }) => {
  const totalDots = categories.length + 1;

  return (
    <div className="category-progress-bar">
      <div className="progress-line">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="category-dots">
        {Array.from({ length: totalDots }, (_, index) => (
          <div
            key={index}
            className={`category-dot ${
              index * (100 / (totalDots - 1)) <= progress ? "active" : ""
            }`}
            style={{
              left: `${index * (100 / (totalDots - 1))}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
