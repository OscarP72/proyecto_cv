import "./Hero.css";
import React from "react";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt={hero.name} />
      <div className="card">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>🌎{hero.city}</p>
        <p>🎂{hero.birthDate}</p>
        <p>
          📨
          <a href={"mailto:" + hero.email}>oskitarpereal@gmail.com</a>
        </p>
        
        <p>
          💾<a href={hero.gitHub}> GitHub</a>
        </p>
      </div>
    </div>
  );
};
export default Hero;
