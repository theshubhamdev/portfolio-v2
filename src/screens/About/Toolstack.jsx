import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import styles from './About.module.css'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
