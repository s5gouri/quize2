import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-white p-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mt-12 md:mt-4">
            <h1 className="text-5xl font-bold mb-4 text-gray-900 relative">
              Master New Concepts with Every Quiz
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 -z-10 rounded-md blur-sm"></span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our quizzes are designed to help you review and master the
              material covered in your classes. With a wide range of topics and
              difficulty levels, you can test your knowledge and track your
              progress. Whether you're preparing for exams or just looking to
              reinforce what you've learned, our quizzes provide a fun and
              effective way to study.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
              <button
                onClick={() => navigate("/quizzes")}
                className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
              >
                Start Solving
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148921809.jpg?w=740&t=st=1723234889~exp=1723235489~hmac=ad2b2aaeb44a918e1bf2f46c4e3fbabf6b4ec8d62365a61207c47a246fc77b7b"
              alt="People with question marks"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
