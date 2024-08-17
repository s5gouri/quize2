import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamPhoto from "../assets/hero.jpg"; // Replace with your image

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
            About Us
          </h1>
          <div className="mb-12">
            <img
              src={teamPhoto}
              alt="Our Team"
              className="w-96 h-auto rounded-lg shadow-lg"
            />
          </div>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to provide high-quality quizzes and educational
              resources to help students excel in their studies. We are
              dedicated to creating engaging and interactive content that makes
              learning enjoyable and effective.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600">
              We envision a world where education is accessible and engaging for
              everyone. Our goal is to become a leading platform in educational
              technology, fostering a love for learning and helping students
              achieve their academic goals.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="mt-4">
                  John is passionate about education and technology, working
                  tirelessly to ensure our platform meets the highest standards
                  of quality and innovation.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  Jane Smith
                </h3>
                <p className="text-gray-600">Chief Operating Officer</p>
                <p className="mt-4">
                  Jane oversees the day-to-day operations of our platform,
                  ensuring that everything runs smoothly and efficiently.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  Emily Johnson
                </h3>
                <p className="text-gray-600">Head of Content</p>
                <p className="mt-4">
                  Emily leads our content creation team, developing engaging
                  quizzes and educational resources that cater to various
                  learning needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
