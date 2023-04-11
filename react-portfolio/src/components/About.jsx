import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Brandy Posthuma, and I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done. I am determined and decisive. I identify and develop opportunities.
        </p>

        <br />

        <p className="text-xl">
          I decided to change my occupation after fifteen years of working in collage admissions. I still like communicating with people and work in a team. I want to alter the path a bit and switch to software development. As an admissions representative, I learned how to connect with people and learn about their goals and possible outcomes they were desiring. I have been working “on the other side” long enough to realize how important software development components are. I have become interested in these fields recently. I am certain that joining your team is a benefit for both sides. My professional expertise in education can provide valuable insights and a fresh perspective on product development.
        </p>
      </div>
    </div>
  );
};

export default About;
