import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a passionate <b className="purple">Full Stack Developer</b> from Kuala Lumpur, Malaysia, driven by a love for coding and solving real-world problems through technology.
              <br />
              <br />
              With strong expertise in <b className="purple">Next.js</b>, <b className="purple">Node.js</b>, and modern JavaScript frameworks like <b className="purple">React.js</b>, I build <b className="purple">scalable, efficient, and user-centric web applications</b> from front to back.
              <br />
              <br />
              My experience spans <b className="purple">managing databases</b>, <b className="purple">orchestrating containers</b>, and <b className="purple">setting up CI/CD pipelines</b> to ensure smooth and reliable application deployment.
              <br />
              <br />
              Whenever possible, I channel my passion into developing products using <b className="purple">Node.js</b> and the latest web technologies—crafting <b className="purple">seamless experiences</b> that merge performance with great design.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KaylaHarris1998"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/Y2QzqDTx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
