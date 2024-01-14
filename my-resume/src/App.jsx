import { useState } from "react";
import "./App.css";
import { EE } from "./components/EE.jsx";
import { Profile } from "./components/Profile.jsx";
import { Skills } from "./components/Skills.jsx";
import { Counter } from "./components/Counter.jsx";

function App() {
  return (
    <>
      <Profile name="Rishi Sarraff" email="sarraff2004@gmail.com" />
      <EE
        title="Education"
        item1="University of Virginia"
        item2="Bachelors in Computer Science & Applied Statistics"
        item3="DSA, Discrete, Mathematical Statistics, Applied Linear Algebra, and Regression Analysis"
      />
      <EE
        title="Relevant Experience"
        item1="Bell Automation Systems"
        item2="Software Engineering Intern"
        item3="idk"
      />
      <EE
        item1="National Institute of Health (NIH)"
        item2="Computational Neuroscience Intern"
        item3="Did work"
      />
      <EE
        item1="Virginia Consulting Group"
        item2="Project Analyst"
        item3="Executive Summary"
      />

      <Skills />
    </>
  );
}

export default App;
