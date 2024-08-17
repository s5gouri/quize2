const express = require("express");
const Quiz = require("../models/Quiz");
const auth = require("../middleware/auth");
const router = express.Router();

// Create a Quiz (Teacher Only)
router.post("/", auth, async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    quiz.teacher = req.user.id;
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get All Quizzes for a Department
router.get("/:department", auth, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ subject: req.params.department });
    res.json(quizzes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Take a Quiz (Submit Answers)
router.post("/submit/:id", auth, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ msg: "Quiz not found" });

    // Evaluate Quiz
    let score = 0;
    req.body.answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctOption) score++;
    });

    // Save result (Omitted in this snippet)
    res.json({ score });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
