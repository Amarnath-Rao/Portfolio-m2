import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/TodoList.png";
import keep from "../../Assets/Projects/keepr.jpeg";
import book from "../../Assets/Projects/book.jpeg";
import auth from "../../Assets/Projects/auth.jpeg";
import tindog from "../../Assets/Projects/tindog.jpeg";
import krishikart from "../../Assets/Projects/Krishikart.png";
import TMN from "../../Assets/Projects/TMN.jpeg";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krishikart}
              isBlog={false}
              title="School Management System"
              description="Used HTML, CSS, Javascript to build this School Website which is user friendly. This is only Frontend design."
              link="https://github.com/Amarnath-Rao/UI-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Automobile Company"
              description="Project inludes Front-End and Back-End tools inluding Java Swing and PosgresSQL as DataBase, 
              A Simple and clear UI for Buyers and Sellers."
              link="https://github.com/Amarnath-Rao/AutoMobile-Company-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keep}
              isBlog={false}
              title="Crypto Exchange Project"
              description="Still in Progress."
              link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Devoloping Antivirus for PC"
              description="In progress...."
              link="https://github.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
