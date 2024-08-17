import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import AboutUs from "./components/About";
import ContactPage from "./components/Contect";
import BCAQuizPage from "./components/Bcaquizpage";
import BBAQuizPage from "./components/Bbaquizepage";
import HotelManagementQuizPage from "./components/Hotelmanagmentquizpage";
import HospitalManagementQuizPage from "./components/Hospitalmanagmentquizepage";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/Protected";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes/bca"
            element={
              <ProtectedRoute>
                <BCAQuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes/bba"
            element={
              <ProtectedRoute>
                <BBAQuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes/hotel-management"
            element={
              <ProtectedRoute>
                <HotelManagementQuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes/hospital-management"
            element={
              <ProtectedRoute>
                <HospitalManagementQuizPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
