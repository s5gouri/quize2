const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Function to fetch quiz questions from Google's Gemini API
const fetchQuizQuestions = async (topic) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.GOOGLE_API_KEY}`,
      {
        prompt: {
          text: `Provide 10 multiple-choice questions on the topic: ${topic}. Include 4 options per question and indicate the correct option in the format: Question?;Option 1;Option 2;Option 3;Option 4;Correct Option Index (0-3).`,
        },
        temperature: 0.7,
        candidateCount: 1,
        maxOutputTokens: 1024,
        topP: 0.95,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Parsing the response to extract questions
    const questions = parseQuestions(response.data.candidates[0].output);
    console.log(questions)
    return questions;
  } catch (error) {
    console.error("Error fetching questions from Google's API:", error);
    throw error;
  }
};

// Function to parse questions from the Google API response
const parseQuestions = (text) => {
  // console.log(text);
  return text
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(";");
      return {
        question: parts[0],
        options: parts.slice(1, 5),
        answer: parseInt(parts[5], 10),
      };
    });
};

// Endpoint to get quiz questions
app.post("/api/quiz", async (req, res) => {
  const { topic } = req.body;
  try {
    const questions = await fetchQuizQuestions(topic);
    res.json(questions);
  } catch (error) {
    res.status(500).send("Error fetching quiz questions");
  }
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth")); // Assuming you have an auth route
app.use("/api/quiz", require("./routes/quiz")); // Assuming you have a quiz route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
