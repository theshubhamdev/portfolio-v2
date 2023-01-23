import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import styles from './About.module.css'

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className={styles.projectHeading} style={{ paddingBottom: "20px" }}>
      Open Source <strong className="primaryColor">Contributions</strong>
      </h1>
      <GitHubCalendar
        username="theshubhamdev"
        blockSize={15}
        blockMargin={5}
        color="#5B8FB9"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
