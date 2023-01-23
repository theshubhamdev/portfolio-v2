import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./ProjectsCards";
import { Particle } from "@/components";
import styles from "./Projects.module.css";
import projectsList from "@/Assets/projectsData.json";

function Projects() {
  return (
    <Container fluid className={styles.projectSection}>
      <Particle />
      <Container>
        <h1 className={styles.projectHeading}>
          My Recent <strong className="primaryColor">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map((project) => (
            <Col md={4} className={styles.projectCard}>
              <ProjectsCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
