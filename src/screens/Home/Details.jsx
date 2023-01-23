import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from '../../../public/avatar.svg'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './Home.module.css';
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from '@/constants/socialUrls';
import Image from 'next/image';

function Details() {
  return (
    <Container fluid className={styles.homeAboutSection} id="about">
      <Container>
        <Row>
          <Col md={8} className={styles.homeAboutDescription}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className={styles.primaryColor}> INTRODUCE </span> MYSELF
            </h1>
            <p className={styles.homeAboutBody}>
              I am a Passionate computer science engineer with{' '}<i><b className={styles.primaryColor}>Real-World Experience</b></i>  in software development.
              <br />
              <br />I am proficient in multiple programming languages and experienced in{' '}
              <i>
                <b className={styles.primaryColor}>Agile methodologies</b>
              </i>
              <br />
              <br />
              I am seeking to apply&nbsp;
              <i>
                <b className={styles.primaryColor}>theoretical and practical knowledge </b> to
                {" "}
                <b className={styles.primaryColor}>
                innovate and solve complex problems.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className={styles.primaryColor}>Node.js</b> and
              <i>
                <b className={styles.primaryColor}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className={styles.primaryColor}> React Native, React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className={styles.myAvtar}>
            <Tilt>
              <Image src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className={styles.homeAboutSocial}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className={styles.primaryColor}>connect </span>with me
            </p>
            <ul className={styles.homeAboutSocialLinks}>
              <li className={styles.socialIcons}>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Details;
