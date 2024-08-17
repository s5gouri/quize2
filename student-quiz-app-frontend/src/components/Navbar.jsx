import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuthStatus();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, logout };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleProfileClick = () => {
    setIsProfileOpen(false);
    navigate("/profile");
  };

  return (
    <nav className="bg-green-500 p-4 text-white shadow-md px-10 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">QuizApp</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/quizzes" className="hover:text-gray-200">
            Quizzes
          </Link>
          <Link to="/leaderboard" className="hover:text-gray-200">
            Leaderboard
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2"
              >
                <img
                  src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?w=740&t=st=1723407527~exp=1723408127~hmac=3d29fedf5b5dde5f985d15f70e959afde87582d3004bcc6da52f6b7885b9e6ad"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black dark:bg-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={handleProfileClick}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/register")}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Sign In
              </button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link to="/quizzes" className="block hover:text-gray-200">
            Quizzes
          </Link>
          <Link to="/leaderboard" className="block hover:text-gray-200">
            Leaderboard
          </Link>
          <Link to="/about" className="block hover:text-gray-200">
            About Us
          </Link>
          <Link to="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
          {isAuthenticated ? (
            <>
              <button
                onClick={handleProfileClick}
                className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/register")}
                className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/login")}
                className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
