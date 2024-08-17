import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Quizzes = () => {
  const navigate = useNavigate();

  const departments = [
    {
      name: "BCA",
      link: "/quizzes/bca",
      bgColor: "bg-blue-600",
      description: "Test your knowledge in programming, databases, and more.",
      quizCount: 10,
      leaderboardLink: "/leaderboard",
    },
    {
      name: "BBA",
      link: "/quizzes/bba",
      bgColor: "bg-green-600",
      description: "Explore quizzes on management, finance, and marketing.",
      quizCount: 8,
      leaderboardLink: "/leaderboard",
    },
    {
      name: "Hotel Management",
      link: "/quizzes/hotel-management",
      bgColor: "bg-yellow-600",
      description:
        "Challenge yourself with quizzes on hospitality and services.",
      quizCount: 12,
      leaderboardLink: "/leaderboard",
    },
    {
      name: "Hospital Management",
      link: "/quizzes/hospital-management",
      bgColor: "bg-red-600",
      description:
        "Evaluate your skills in healthcare management and administration.",
      quizCount: 7,
      leaderboardLink: "/leaderboard",
    },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  const handleLeaderboardClick = (link, e) => {
    e.stopPropagation(); // Prevent triggering the card's onClick
    navigate(link);
  };

  const handleStartQuizClick = (link, e) => {
    e.stopPropagation(); // Prevent triggering the card's onClick
    navigate(link);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className={`${dept.bgColor} text-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer`}
              onClick={() => handleCardClick(dept.link)}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                {dept.name}
              </h2>
              <p className="mt-4 text-sm md:text-base">{dept.description}</p>
              <p className="mt-2 text-xs md:text-sm">
                Number of quizzes: {dept.quizCount}
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
                  onClick={(e) =>
                    handleLeaderboardClick(dept.leaderboardLink, e)
                  }
                >
                  View Leaderboard
                </button>
                <button
                  className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
                  onClick={(e) => handleStartQuizClick(dept.link, e)}
                >
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quizzes;
