import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css"



const Header = () => {
  return (
    <header className="Header-head">
      <Container id="Header-container">
        <Row>
          <Col md="6"><img src={require("../Images/JuicyJlight.png")} id="Header-img" /></Col>
          <Col md="6" id="Header-search"><input type="text" id="Header-input" placeholder="Search"/></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;