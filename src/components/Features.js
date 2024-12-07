import React from "react";
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Workouts",
      description: "Personalized fitness plans using AI.",
      image: feature1,
    },
    {
      title: "Progress Tracking",
      description: "Track your results in real-time.",
      image: feature2,
    },
    {
      title: "24/7 Support",
      description: "AI-based customer support anytime.",
      image: feature3,
    },
  ];

  return (
    <section className="py-16 bg-light text-primary">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
