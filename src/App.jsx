import "./App.css";
import { useState } from "react";
import { CV } from "./CV/cv";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experiencie";
import More from "./components/More/More";
import About from "./components/About/About";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Educación
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experiencia
      </button>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
      
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
};

export default App;
