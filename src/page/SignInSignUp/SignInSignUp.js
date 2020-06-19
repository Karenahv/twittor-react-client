import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import logoBlue from "../../assets/png/original.png";
import logoWhite from "../../assets/png/original (1).png";
import "./SignInSignUp.scss";

export default function () {
  return (
    <Container className="signin_signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  );
}

function LeftComponent() {
  return (
    <Col className="signin_signup__left" xs={6}>
      <img src={logoBlue} />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Enterate de qué esta hablando la gente
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComments} />
          únete a la conversación
        </h2>
      </div>
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin_signup__right" xs={6}>
      <div>
        <img src={logoWhite} alt="twittor"></img>
        <h2>Mira lo que esta pasando en el mundo en este momento</h2>
        <h3>Únete a twittor hoy mismo</h3>
        <Button variant="primary">Regístrate</Button>
        <Button variant="outline-primary">Iniciar Sesión</Button>
      </div>
    </Col>
  );
}
