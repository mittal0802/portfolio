import React from "react";
import "./CSS Files/projects.css";

import sorting from "./Images/sorting.png";
import weather from "./Images/weatherwise.png";
import student from "./Images/Student.png";
import ecommerce from "./Images/ecommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({
  title,
  imageSrc,
  githubLink,
  liveLink,
  technologies,
  description,
}) {
  return (
    <div className="project">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img className="images" src={imageSrc} alt={title} />
      </a>
      <div className="project-info">
        <div className="project-title">
          <h2>{title}</h2>
          <div className="liness"></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3>
          <span style={{ color: "#FF004F" }}>{technologies}</span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects">
      <h1 className="title">
        My Projects <span style={{ color: "#FF004F" }}>.</span>{" "}
      </h1>
      <div className="projects-wrapper">
        <ProjectCard
          title="UrbanStyle - Where Fashion Meets Comfort"
          imageSrc={ecommerce}
          githubLink="https://github.com/mittal0802/urbanStyle"
          liveLink="https://urban-style-react.netlify.app/"
          technologies="React.js, HTML/CSS, Firebase, Styled Components, Stripe API"
          description="UrbanStyle is a modern and user-friendly React-based e-commerce application that provides a seamless online shopping experience for fashion enthusiasts. With simplified categories, secure authentication using Firebase, real-time database powered by Firebase, and secure payments through Stripe, UrbanStyle is the ultimate destination for trendy shoppers."
        />

        <ProjectCard
          title="WeatherWise - A Weather App"
          imageSrc={weather}
          liveLink="https://weather-wise-react.netlify.app/"
          githubLink="https://github.com/mittal0802/weatherWise"
          technologies="React.js, HTML/CSS, OpenWeatherMap API"
          description="The WeatherWise app allows users to check the current weather conditions for a specific location. It provides real-time weather information such as temperature, humidity, wind speed, and more. The app uses the OpenWeather API to fetch the weather data."
        />

        <ProjectCard
          title="Sorting Visualizer"
          imageSrc={sorting}
          liveLink="https://mittal0802.github.io/Sorting-Visualizer/"
          githubLink="https://github.com/mittal0802/Sorting-Visualizer"
          technologies="HTML, CSS, Javascript"
          description="Designed and created a sorting visualizer application featuring six prominent sorting algorithms (Selection, Bubble, Insertion, Merge, Quick, and Heap Sort) to offer an engaging and educational platform for visualizing and understanding the sorting process."
        />

        <ProjectCard
          title="Student Report Management System"
          imageSrc={student}
          liveLink="https://github.com/mittal0802/StudentReportManagementSystem"
          githubLink="https://github.com/mittal0802/StudentReportManagementSystem"
          technologies="C++, OOPs"
          description="This is a menu driven C++ based student report management system where there are three users - admin, faculty and student. All users can login to the system using their respective id and password given by the department at the time of their id creation."
        />
      </div>
    </div>
  );
}

export default Projects;
