import React from 'react';
import "./Projects.css";
import Card from '../Card/Card';
import employee from "../../assets/employee.png";
import weather from "../../assets/Weather.png";
import agecalc from "../../assets/agecalc.png";
import calc from "../../assets/calc.png";

function Projects() {
  return (
    <div id="projects">
      <h1 id="para">FRESHER</h1>
      <div className="slider">
        <Card title="EMPLOYEE MANAGEMENT" image={employee} />
        <Card title="WEATHER" image={weather} />
        <Card title="AGE CALCULATOR" image={agecalc} />
        <Card title="CALCULATOR" image={calc} />
      </div>
    </div>
  );
}

export default Projects;
