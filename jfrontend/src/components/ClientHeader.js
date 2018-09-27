import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../App.css";

const ClientHeader = () => {

  return (
    <div>
      <header className="Client-head">
        <Container >
          <Row>
            <Col sm="4" className="text-center">
              <img src={require("../Images/JustJ.png")} className="Client-img" alt="Logo"/> 
              Admin
            </Col>
            <Col sm="4"></Col>
            <Col sm="4" className="text-center mt-2"><a href="./Main.js" className="text-white">Home</a></Col>
          </Row>
        </Container>
      </header>
      <h1 className="text-center">
        <img src={require("../Images/JuicyJlight.png")} className="Client-logo" alt="Logo"/>
      </h1>
    </div>
  )
}

export default ClientHeader;