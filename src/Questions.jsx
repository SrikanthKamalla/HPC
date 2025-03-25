import React, { useState, useEffect } from "react";
import "./Questions.css";

//importing images
import LifestyleImage from "./assets/image1.jpg";
import FoodHabitsImage from "./assets/image2.jpg";
import ExerciseImage from "./assets/image3.jpg";
import SleepPatternsImage from "./assets/image4.jpg";
import MentalWellbeingImage from "./assets/image5.jpg";

const categories = [
  {
    name: "Lifestyle",
    questions: [
      {
        question: "How often do you exercise?",
        options: ["Daily", "Weekly", "Rarely", "Never"],
        scores: [4, 3, 2, 1],
      },
      { question: "Do you smoke?", options: ["Yes", "No"], scores: [0, 5] },
      {
        question: "How many hours do you work per day?",
        options: ["<4", "4-6", "6-8", "8+"],
        scores: [4, 3, 2, 1],
      },
      {
        question: "Do you feel stressed frequently?",
        options: ["Yes", "No", "Sometimes"],
        scores: [1, 4, 2],
      },
      {
        question: "How many hours do you spend on screens daily?",
        options: ["<2", "2-4", "4-6", "6+"],
        scores: [4, 3, 2, 1],
      },
    ],
  },
  {
    name: "Food Habits",
    questions: [
      {
        question: "How many servings of vegetables do you eat per day?",
        options: ["0-1", "2-3", "4-5", "More than 5"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you consume fast food often?",
        options: ["Yes", "No"],
        scores: [1, 5],
      },
      {
        question: "How much water do you drink daily?",
        options: ["<1L", "1-2L", "2-3L", "More than 3L"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "How many meals do you eat per day?",
        options: ["1", "2", "3", "More than 3"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you consume sugary drinks daily?",
        options: ["Yes", "No", "Occasionally"],
        scores: [1, 4, 2],
      },
    ],
  },
  {
    name: "Exercise",
    questions: [
      {
        question: "What type of exercise do you do most?",
        options: ["Cardio", "Strength", "Yoga", "None"],
        scores: [4, 4, 3, 1],
      },
      {
        question: "How long do you exercise per session?",
        options: ["<15 mins", "15-30 mins", "30-45 mins", "More than 45 mins"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "How many days a week do you exercise?",
        options: ["0", "1-2", "3-4", "5+"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you feel energetic after exercise?",
        options: ["Yes", "No", "Sometimes"],
        scores: [4, 1, 2],
      },
      {
        question: "Do you experience body pain due to lack of activity?",
        options: ["Yes", "No", "Occasionally"],
        scores: [1, 4, 2],
      },
    ],
  },
  {
    name: "Sleep Patterns",
    questions: [
      {
        question: "How many hours do you sleep per night?",
        options: ["<4", "4-6", "6-8", "More than 8"],
        scores: [1, 2, 4, 3],
      },
      {
        question: "Do you have trouble falling asleep?",
        options: ["Yes", "No", "Sometimes"],
        scores: [1, 4, 2],
      },
      {
        question: "Do you wake up feeling refreshed?",
        options: ["Yes", "No", "Sometimes"],
        scores: [4, 1, 2],
      },
      {
        question: "Do you use electronic devices before bed?",
        options: ["Yes", "No"],
        scores: [1, 4],
      },
      {
        question: "How often do you wake up during the night?",
        options: ["Never", "1-2 times", "3+ times"],
        scores: [4, 2, 1],
      },
    ],
  },
  {
    name: "Mental Well-being",
    questions: [
      {
        question: "How often do you feel anxious or stressed?",
        options: ["Daily", "Weekly", "Rarely", "Never"],
        scores: [1, 2, 3, 4],
      },
      {
        question: "Do you engage in relaxation techniques?",
        options: ["Yes", "No", "Sometimes"],
        scores: [4, 1, 2],
      },
      {
        question: "Do you feel socially connected with friends/family?",
        options: ["Yes", "No", "Occasionally"],
        scores: [4, 1, 2],
      },
      {
        question: "How would you rate your overall happiness?",
        options: ["1", "2", "3", "4", "5"],
        scores: [1, 2, 3, 4, 5],
      },
      {
        question: "Do you struggle with focus and concentration?",
        options: ["Yes", "No", "Sometimes"],
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

  const totalScore = categories.reduce(
    (sum, category) =>
      sum + category.questions.reduce((qSum, q) => qSum + 5, 0),
    0
  );
  const handleAnswerChange = (question, answer, scoreValue) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
    setScore((prev) => prev + scoreValue);

    setTimeout(() => {
      const category = categories[currentCategoryIndex];
      if (currentQuestionIndex < category.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (currentCategoryIndex < categories.length - 1) {
        setCurrentCategoryIndex((prev) => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        setIsCompleted(true);
      }
    }, 500);
  };

  if (isCompleted) {
    console.log(totalScore);
    console.log(score);
    return (
      <div className="container">
        <h2>Assessment Completed!</h2>
        <p>Thank you for your responses.</p>
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

  // Object to map category names to images
  const categoryImages = {
    Lifestyle: LifestyleImage,
    "Food Habits": FoodHabitsImage,
    Exercise: ExerciseImage,
    "Sleep Patterns": SleepPatternsImage,
    "Mental Well-being": MentalWellbeingImage,
  };

  return (
    <div className="container">
      <div className="tracker">
        <CategoryProgressBar categories={categories} progress={progress} />
      </div>
      <h3 className="category-name">{currentCategory.name}</h3>
      <div className="quesImg">
        <div className="question">
          <p id="questionP">{currentQuestion.question}</p>
          {currentQuestion.options.map((option, index) => (
            <label key={option} id="option-radio">
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
              {option}
            </label>
          ))}
        </div>
        {/* <div
          className="imgDiv"
          style={{
            backgroundImage: `url(${
              categoryImages[currentCategory.name] || ""
            })`,
          }}
        ></div> */}
      </div>
    </div>
  );
};
const CategoryProgressBar = ({ categories, progress }) => {
  const totalDots = 6;
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
