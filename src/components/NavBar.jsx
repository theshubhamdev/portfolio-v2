import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../public/TS.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { v1 } from '@/constants/website';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? styles.sticky : styles.navbar}`}
    >
      <Container>
        <Navbar.Brand href="/" className={`d-flex ${styles.navbarBrand}`}>
          <Image src={logo} className={`img-fluid ${styles.logo}`} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className={`ms-auto ${styles.navbarNav} ${styles.nav}`}
            defaultActiveKey="#home"
          >
            <Nav.Item className={styles.navItem}>
              <Link
                className={`${styles.navLink} nav-link`}
                href="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </Nav.Item>

            <Nav.Item className={styles.navItem}>
              <Link
                className={`${styles.navLink} nav-link`}
                href="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </Nav.Item>

            <Nav.Item className={styles.navItem}>
            <Link
                className={`${styles.navLink} nav-link`}
                href="/projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item className={styles.navItem}>
            <Link
                className={`${styles.navLink} nav-link`}
                href={v1}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Previous Website
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
