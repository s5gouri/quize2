import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Leaderboard = () => {
  const [activeDepartment, setActiveDepartment] = useState("BCA");

  // Sample data for each department
  const departments = {
    BCA: [
      { name: "Alice", score: 95 },
      { name: "Bob", score: 90 },
      { name: "Charlie", score: 85 },
    ],
    BBA: [
      { name: "David", score: 80 },
      { name: "Eve", score: 75 },
      { name: "Frank", score: 70 },
    ],
    "Hotel Management": [
      { name: "Grace", score: 88 },
      { name: "Hank", score: 82 },
      { name: "Ivy", score: 78 },
    ],
    "Hospital Management": [
      { name: "Jack", score: 92 },
      { name: "Karen", score: 89 },
      { name: "Leo", score: 85 },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-300 p-6 md:p-10 h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
            Leaderboard
          </h1>
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {Object.keys(departments).map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`py-2 px-4 rounded-lg text-lg md:text-xl ${
                  activeDepartment === department
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border border-blue-500"
                }`}
              >
                {department}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto rounded-md">
            <table className="min-w-full bg-gray-100 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-3 px-4 md:px-6 text-left">Rank</th>
                  <th className="py-3 px-4 md:px-6 text-left">Name</th>
                  <th className="py-3 px-4 md:px-6 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {departments[activeDepartment].map((player, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-4 md:px-6 text-left">{index + 1}</td>
                    <td className="py-3 px-4 md:px-6 text-left font-semibold">
                      {player.name}
                    </td>
                    <td className="py-3 px-4 md:px-6 text-left">
                      {player.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Leaderboard;
