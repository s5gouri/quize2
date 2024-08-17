import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p className="text-sm sm:text-base">
        © 2024 QuizApp |{" "}
        <a href="#" className="text-blue-300 hover:text-blue-500">
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="#" className="text-blue-300 hover:text-blue-500">
          Privacy Policy
        </a>
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="#" className="text-blue-300 hover:text-blue-500">
          🔗 Facebook
        </a>
        <a href="#" className="text-blue-300 hover:text-blue-500">
          🔗 Twitter
        </a>
        <a href="#" className="text-blue-300 hover:text-blue-500">
          🔗 Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
