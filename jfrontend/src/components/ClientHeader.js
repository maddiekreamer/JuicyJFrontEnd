import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../App.css";

const ClientHeader = (props) => {

  return (
    <div>
      <header className="Client-head">
        <Container >
          <Row>
            <Col sm="3" className="text-center">
              <img src={require("../Images/JustJ.png")} className="Client-img" alt="Logo"/> 
              Admin
            </Col>
            <Col sm="3"></Col>
            <Col sm="3" className="text-center mt-2"><a href="./Main.js" className="text-white">Home</a></Col>
            <Col sm="3" className="text-center mt-2"><a href="https://wjoey13.auth0.com/v2/logout" onClick={props.logout} className="text-white">Logout</a></Col>
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