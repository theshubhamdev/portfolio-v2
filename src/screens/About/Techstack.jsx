import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiJavascript1,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import styles from "./About.module.css";
import { FaAws } from 'react-icons/fa';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <FaAws />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiJavascript1 />
      </Col>
    </Row>
  );
}

export default Techstack;
