import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    department: "",
    collegeName: "",
    rollNumber: "",
    address: "",
    phoneNumber: "",
    photo: "",
    score: 0,
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={
                  profile.photo ||
                  "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?w=740&t=st=1723407527~exp=1723408127~hmac=3d29fedf5b5dde5f985d15f70e959afde87582d3004bcc6da52f6b7885b9e6ad"
                }
                alt="Profile Avatar"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
              />
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
            </div>
            <h2 className="text-2xl font-semibold mt-4 text-gray-700">
              {profile.name || "Your Name"}
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="text"
              name="department"
              value={profile.department}
              onChange={handleInputChange}
              placeholder="Department"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="text"
              name="collegeName"
              value={profile.collegeName}
              onChange={handleInputChange}
              placeholder="College Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="text"
              name="rollNumber"
              value={profile.rollNumber}
              onChange={handleInputChange}
              placeholder="Roll Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="tel"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <input
              type="number"
              name="score"
              value={profile.score}
              placeholder="Score"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
              disabled
            />
          </div>
          <div className="mt-6 flex justify-center">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Profile
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
