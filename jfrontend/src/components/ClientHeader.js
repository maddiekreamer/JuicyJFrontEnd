import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../App.css";

const ClientHeader = () => {

  return (
    <Container >
      <Row>
        <Col sm="4" className="text-center">
          <img src={require("../Images/JustJ.png")} className="Client-img" alt="Logo"/> 
          Admin
        </Col>
        <Col sm="4"></Col>
        <Col sm="4" href="#" className="text-center mt-2">Home</Col>
      </Row>
    </Container>
  )
}

export default ClientHeader;