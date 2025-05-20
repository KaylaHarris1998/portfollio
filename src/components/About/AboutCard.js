import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kayla Harris </span>
            from <span className="purple"> Kuala Lumpur, Malaysia.</span>
            <br />
            I hold a Bachelor's degree in Electronics and Communication Engineering from University of Regina Kuala Lumpur Campus.
            <br />
            <br />
            When I'm not diving deep into code, here's <br />
            what I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} className="quote-footer purple">
          Know yourself, believe in yourself, <br />conquer yourself!
          </p>
          <footer className="blockquote-footer">Kayla Harris</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
