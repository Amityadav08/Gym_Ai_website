import React from "react";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-primary text-white flex items-center justify-center"
    >
      <img
        src={heroImage}
        alt="Gym AI"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="z-10 text-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-4 text-accent">Gym AI</h1>
        <p className="text-xl text-gray-300 mb-8">
          Revolutionize your workouts with AI-powered fitness solutions.
        </p>
        <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-500 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
