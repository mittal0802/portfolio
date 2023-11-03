import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";

function About() {
  const skills = [
    "JavaScript",
    "HTML/CSS",
    "React",
    "NodeJS",
    "Github/Git",
    "Bootstrap CSS",
    "C++",
    "Firebase",
    "SQL",
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Operating Systems",
    "Software Engineering",
    "Database Management Systems",
  ];

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#FF004F" }}>.</span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">
          <p>
            Hey there! I'm a passionate final year software engineering student
            at Delhi Technological University with a versatile skill set,
            specializing primarily in full-stack development. I possess a deep
            understanding of both front-end and back-end development and am
            constantly refining my abilities while seeking opportunities for
            growth in both domains.
          </p>
          <br />
          <br />
          <p>
            In my personal life, I enjoy playing games, spending time watching
            shows and working out.{" "}
          </p>
          <br />
          <p>
            Feel free to reach out if you would like to explore the potential of
            working together!
          </p>
        </div>
        <div className="right-section">
          <div className="tools">
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{ color: "#ff005a" }}
              />{" "}
              Skills
            </h1>
            {skills.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                style={{ color: "#ff005a" }}
              />{" "}
              Coursework
            </h1>
            {coursework.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
