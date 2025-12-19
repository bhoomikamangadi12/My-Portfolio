import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  return (
    <div>
      {/* Sections */}
      <main className="pt-20 ">
        {/* Home / Hero */}
        <section
          id="Home"
          className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50"
          // className="min-h-screen flex flex-col justify-center items-center text-center "
          // style={{
          //   backgroundImage: "url('/Images/portfolio-background.png')",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <h2 className="text-6xl font-extrabold font-serif italic mb-4 text-gray-800">
            Hi, I'm Bhoomika Angadi
          </h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-xl">
            A passionate{" "}
            <span className="text-blue-600 font-semibold">
              Software Developer
            </span>{" "}
            building modern, scalable, and high-performance web applications.
          </p>
        </section>

        {/* About */}
        <section id="About" className="bg-gray-50 py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
              I’m a frontend developer specializing in building high-quality web
              applications with{" "}
              <span className="text-blue-600 font-medium">React.js</span>. I
              love creating clean UI, smooth animations, and optimizing
              performance for a seamless user experience. My focus is on
              producing scalable and maintainable code for modern web
              applications.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="Contact"
          className="py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Contact Me
          </h2>
          <form className="max-w-xl mx-auto bg-white p-12 rounded-3xl shadow-xl space-y-6 hover:shadow-2xl transition">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-xl h-36 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
            <button className="w-full px-8 py-4 bg-blue-600 text-white rounded-3xl shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
export default About;
