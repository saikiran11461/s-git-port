import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/project-2.png"
              title="Fragrance outnet"
              description="A web application to shop for top brand perfumes. we have experienced our second team project in Masai School on the fragranceoutlet.com website clone.."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | Advanced JavaScript "
              link="https://fragrance-outlet-mastered.netlify.app/"
              a="https://github.com/Pranjal7777/Fragranceoutlet"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project-1.png"
              title="ModeSens.com"
              description="ModeSens.com is digital shopping assistant, a solution to the disconnected and crowded online shopping experience."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://yesstyleclone.netlify.app/"
              a="https://github.com/somi-kumari/Modesens-clone"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project-3.PNG"
              title="CB2.com"
              description="CB2 (Crate&Barel) is an international home decor store headquartered in Northbrook, Illinois widely deals with furnitures and decor for the modern home."
              tech="Tech-Stacks"
              techD="HTML | CSS | JavaScript | Localstorage  | node.js | MongoDb | "
              link="https://inspiring-meitner-2c82e8.netlify.app/"
              a="https://github.com/somi-kumari/cb2.com-clone_U4"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
