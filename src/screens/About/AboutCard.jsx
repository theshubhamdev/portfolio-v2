import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import styles from './About.module.css'

function AboutCard() {
  return (
    <Card className={styles.quoteCardView}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primaryColor">Shubham Lakhmani </span>
            from <span className="primaryColor"> Ayodhya, India.</span>
            <br />I am a junior pursuing B.Tech in Computer Science and Engineering in SHUATS Prayagraj.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy!
          </p>
          <ul>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Travelling
            </li>
            <li className={styles.aboutActivity}>
              <ImPointRight /> EDM Concerts
            </li>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
