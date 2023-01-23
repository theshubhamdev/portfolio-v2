import React from "react";
import Image from 'next/image'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../public/home-coder.png";
import { Particle } from '@/components';
import Type from './Type';
import Details from './Details';
import styles from './Home.module.css'

function Home() {
  return (
    <section>
      <Container fluid className={styles.homeSection} id="home">
        <Particle />
        <Container className={styles.homeContent}>
          <Row>
            <Col md={7} className={styles.homeHeader}>
              <h1 style={{ paddingBottom: 15 }} className={styles.heading}>
                Hi There!{" "}
                <span className={styles.wave} role="img" aria-labelledby={styles.wave}>
                  👋🏻
                </span>
              </h1>

              <h1 className={styles.headingName}>
                I'M
                <strong className={styles.mainName}> SHUBHAM</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Details /> 
    </section>
  );
}

export default Home;
