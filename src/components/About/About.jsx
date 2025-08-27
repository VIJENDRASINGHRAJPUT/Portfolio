import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'


 function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>PERSONAL INFO</h1>
              <ul>
                <li>
                  <span>NAME</span> : VIJENDRA RAJPUT
                </li>
                <li>
                  <span>AGE</span> : 22 YEARS
                </li>
                <li>
                  <span>GENDER</span> : MALE 
                </li>
                <li>
                  <span>MOBILE NO.</span> : 8435913298 
                </li>
                <li>
                  <span>EMAIL</span> : VIJENDRARAJPUT8435@GMAIL.COM 
                </li>
              </ul>
            </div>
            <div className="education">
              <h1>EDUCATION</h1>
              <ul>
                <li>
                  <span>COLLEGE</span> : NIT AGARTALA
                </li>
                <li>
                  <span>DEGREE</span> : MCA
                </li>
                <li>
                  <span>CGPA</span> : 8.12
                </li>
              </ul>
            </div>
            <div className="skills">
              <h1>SKILLS</h1>
              <ul>
                <li>
                  MERN STACK WEB DEVELOPER
                </li>
                <li>
                  DSA
                </li>
                <li>
                  JAVA
                </li> 
              </ul>
            </div>
          </div>
      </div>
      <div className="rightabout">
      <Card title="Full stack web dev" image={mern}/>
       <Card title="JAVA" image={java}/>
       <Card title="DSA" image={dsa}/>

      </div>
       
      

    </div>
  )
}

export default About