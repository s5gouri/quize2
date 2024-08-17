import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:pr-8">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We’d love to hear from you! Whether you have questions,
                feedback, or just want to say hello, feel free to reach out
                using the form below or contact us through the details provided.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">contact@yourdomain.com</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">+123-456-7890</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  123 Your Street, Your City, Your Country
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                Send Us a Message
              </h2>
              <form
                action="#"
                method="POST"
                className="bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
