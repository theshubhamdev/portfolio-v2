import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col md="4" className={styles.footerCopywright}>
          <h3>Designed and Developed with ♥️ by Shubham</h3>
        </Col>
        <Col md="4" className={styles.footerCopywright}>
          <h3>Copyright © {year} TS</h3>
        </Col>
        <Col md="4" className={styles.footerBody}>
          <ul className={styles.footerIcons}>
            <li className="social-icons">
              <a
                href="https://github.com/theshubhamdev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/_jordan_rock_"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/theshubhamdev/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_jordan_rock/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
