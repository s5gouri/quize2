import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Static questions for each department
const departmentQuestions = {
  BCA: [
    {
      question: "What is React?",
      options: ["A library", "A framework", "A language", "A tool"],
      answer: 0,
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Export",
        "JavaScript Extension",
      ],
      answer: 0,
    },
    {
      question: "What does CRUD stand for?",
      options: [
        "Create, Read, Update, Delete",
        "Create, Run, Update, Delete",
        "Create, Read, Upload, Delete",
        "Create, Read, Undo, Delete",
      ],
      answer: 0,
    },
    {
      question: "Which method is used to update state in React?",
      options: [
        "setState()",
        "updateState()",
        "modifyState()",
        "changeState()",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of a constructor in a class component?",
      options: [
        "Initialize state",
        "Render component",
        "Handle events",
        "Manage lifecycle",
      ],
      answer: 0,
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function with its lexical scope",
        "A way to close a function",
        "A method to hide variables",
        "A type of loop",
      ],
      answer: 0,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "HyperText Transmission Protocol",
        "HyperText Transfer Procedure",
        "HyperText Transmission Procedure",
      ],
      answer: 0,
    },
    {
      question: "Which command is used to install a package in npm?",
      options: ["npm install", "npm add", "npm get", "npm fetch"],
      answer: 0,
    },
    {
      question: "What is the use of the 'useEffect' hook in React?",
      options: [
        "Perform side effects",
        "Manage state",
        "Handle events",
        "Render components",
      ],
      answer: 0,
    },
    {
      question:
        "What is the default value of the 'target' attribute of a link?",
      options: ["_self", "_blank", "_parent", "_top"],
      answer: 0,
    },
  ],
  BBA: [
    {
      question: "What is SWOT analysis?",
      options: [
        "A business strategy tool",
        "A financial term",
        "A marketing concept",
        "An economic indicator",
      ],
      answer: 0,
    },
    {
      question: "What does KPI stand for?",
      options: [
        "Key Performance Indicator",
        "Key Profit Indicator",
        "Key Potential Indicator",
        "Key Project Indicator",
      ],
      answer: 0,
    },
    {
      question: "What is the primary purpose of market research?",
      options: [
        "Understand customer needs",
        "Develop new products",
        "Reduce costs",
        "Increase profits",
      ],
      answer: 0,
    },
    {
      question: "What is a PEST analysis?",
      options: [
        "Political, Economic, Social, Technological",
        "Product, Environment, Sales, Technology",
        "Profit, Expenses, Strategy, Trends",
        "Personal, Economic, Social, Technical",
      ],
      answer: 0,
    },
    {
      question: "What does ROI stand for?",
      options: [
        "Return on Investment",
        "Rate of Interest",
        "Return on Income",
        "Rate of Investment",
      ],
      answer: 0,
    },
    {
      question: "What is a marketing mix?",
      options: [
        "Product, Price, Place, Promotion",
        "Product, Price, Place, Position",
        "Product, Price, Promotion, People",
        "Product, Price, Place, Performance",
      ],
      answer: 0,
    },
    {
      question: "What is a business model?",
      options: [
        "A plan for revenue generation",
        "A type of organizational structure",
        "A market segmentation strategy",
        "A financial projection",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of financial forecasting?",
      options: [
        "Predict future financial performance",
        "Track historical financial performance",
        "Manage daily financial operations",
        "Develop marketing strategies",
      ],
      answer: 0,
    },
    {
      question: "What is the principle of supply and demand?",
      options: [
        "Price is determined by the relationship between supply and demand",
        "Supply is based on production capacity",
        "Demand is fixed and inelastic",
        "Price is independent of supply",
      ],
      answer: 0,
    },
    {
      question: "What is a business strategy?",
      options: [
        "A plan to achieve long-term objectives",
        "A method for daily operations",
        "A tool for market analysis",
        "A technique for managing employees",
      ],
      answer: 0,
    },
  ],
  "Hotel Management": [
    {
      question: "What does ADR stand for?",
      options: [
        "Average Daily Rate",
        "Annual Daily Rate",
        "Adjusted Daily Rate",
        "Absolute Daily Rate",
      ],
      answer: 0,
    },
    {
      question: "What is a room's occupancy rate?",
      options: [
        "Percentage of rooms occupied",
        "Percentage of rooms available",
        "Percentage of rooms booked",
        "Percentage of rooms reserved",
      ],
      answer: 0,
    },
    {
      question: "What is the role of a concierge?",
      options: [
        "Assist guests with various services",
        "Manage housekeeping",
        "Handle reservations",
        "Prepare food and beverages",
      ],
      answer: 0,
    },
    {
      question: "What does F&B stand for in hospitality?",
      options: [
        "Food and Beverage",
        "Food and Budget",
        "Facilities and Budget",
        "Facilities and Beverage",
      ],
      answer: 0,
    },
    {
      question: "What is a hotel's revenue management?",
      options: [
        "Optimizing pricing and inventory to maximize revenue",
        "Managing guest services",
        "Handling staff scheduling",
        "Overseeing food and beverage operations",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of a guest satisfaction survey?",
      options: [
        "Measure and improve guest experience",
        "Track hotel financial performance",
        "Analyze market trends",
        "Manage staff performance",
      ],
      answer: 0,
    },
    {
      question: "What does the term 'check-in' refer to?",
      options: [
        "Process of registering a guest",
        "Method of checking room quality",
        "System for billing guests",
        "Procedure for cleaning rooms",
      ],
      answer: 0,
    },
    {
      question: "What is a 'suite' in hotel terminology?",
      options: [
        "A set of rooms designed for luxury",
        "A single hotel room",
        "A conference room",
        "A standard room type",
      ],
      answer: 0,
    },
    {
      question: "What is the function of a reservation system?",
      options: [
        "Manage and track room bookings",
        "Handle guest complaints",
        "Schedule staff shifts",
        "Control food and beverage orders",
      ],
      answer: 0,
    },
    {
      question: "What is 'housekeeping' in a hotel?",
      options: [
        "Cleaning and maintaining guest rooms",
        "Preparing food and beverages",
        "Handling guest check-ins",
        "Managing hotel finances",
      ],
      answer: 0,
    },
  ],
  "Hospital Management": [
    {
      question: "What does EMR stand for?",
      options: [
        "Electronic Medical Record",
        "Emergency Medical Record",
        "Extended Medical Record",
        "Elective Medical Record",
      ],
      answer: 0,
    },
    {
      question: "What is Triage?",
      options: [
        "Patient prioritization",
        "A medical condition",
        "A type of treatment",
        "A diagnostic tool",
      ],
      answer: 0,
    },
    {
      question: "What does ICU stand for?",
      options: [
        "Intensive Care Unit",
        "Intermediate Care Unit",
        "Integrated Care Unit",
        "Internal Care Unit",
      ],
      answer: 0,
    },
    {
      question: "What is a hospital's EHR system?",
      options: [
        "Electronic Health Record system",
        "Emergency Health Record system",
        "Extended Health Record system",
        "Elective Health Record system",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of a medical billing department?",
      options: [
        "Handle patient billing and insurance claims",
        "Manage patient care",
        "Oversee medical records",
        "Coordinate hospital staffing",
      ],
      answer: 0,
    },
    {
      question: "What is a hospital's infection control program?",
      options: [
        "Measures to prevent and control infections",
        "A system for managing hospital equipment",
        "A method for patient scheduling",
        "A protocol for staff training",
      ],
      answer: 0,
    },
    {
      question: "What is the role of a hospital administrator?",
      options: [
        "Oversee hospital operations and management",
        "Provide direct patient care",
        "Perform medical procedures",
        "Handle patient medical records",
      ],
      answer: 0,
    },
    {
      question: "What does HIPAA stand for?",
      options: [
        "Health Insurance Portability and Accountability Act",
        "Health Information Protection and Access Act",
        "Hospital Information Privacy and Accessibility Act",
        "Health Insurance Privacy and Accountability Act",
      ],
      answer: 0,
    },
    {
      question: "What is patient care coordination?",
      options: [
        "Organizing and managing patient care across different services",
        "Handling patient billing",
        "Scheduling hospital staff",
        "Maintaining medical records",
      ],
      answer: 0,
    },
    {
      question: "What is a medical diagnosis?",
      options: [
        "Identification of a disease or condition",
        "A type of medical treatment",
        "A method of patient care",
        "A hospital administration process",
      ],
      answer: 0,
    },
  ],
};

const QuizPage = ({ department }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/quiz1", {
        topic: searchQuery,
      });

      // Check if questions are returned
      if (response.data && response.data.length > 0) {
        setQuestions(response.data);
      } else {
        setQuestions(departmentQuestions[department] || fallbackQuestions);
      }
      setCurrentQuestionIndex(0);
      setScore(0);
    } catch (error) {
      console.error("Error fetching questions1:", error);
      setQuestions(departmentQuestions[department] || fallbackQuestions); // Use department-specific questions on error
    }
    setIsLoading(false);
  };
  console.log(questions)
  const handleAnswerClick = (optionIndex) => {
    if (optionIndex === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz finished! Your score is ${score}`);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          {department} Quiz
        </h1>

        <form onSubmit={handleSearch} className="w-full max-w-md mb-8 flex">
          <input
            type="text"
            placeholder="Search for a topic..."
            className="w-full p-4 rounded-lg border-2 border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className={`ml-4 py-2 px-4 rounded ${
              isLoading
                ? "bg-gray-400"
                : "bg-white text-black hover:bg-gray-200"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>

        {questions.length > 0 && !isLoading && (
          <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Question {currentQuestionIndex + 1}/{questions.length}
            </h2>
            <p className="mb-4">{questions[currentQuestionIndex].question}</p>
            <div className="grid grid-cols-1 gap-4 mb-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
                  onClick={() => handleAnswerClick(index)}
                >
                  {option}
                  {console.log(option)}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400"
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800"
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {questions.length === 0 && !isLoading && (
          <p className="text-white text-lg">Start by searching for a topic!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
