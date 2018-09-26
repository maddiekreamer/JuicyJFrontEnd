import React, {Component} from "react";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import "../App.css";


class Client extends Component {


  render() {
    return (
      <div>
        <header className="Client-head">
          <Container>
            <Row>
              <Col sm="4" className="text-center">
                <img src={require("../Images/JustJ.png")} className="Client-img" alt="Logo"/> 
                Admin
              </Col>
              <Col sm="4"></Col>
              <Col sm="4" href="#" className="text-center mt-2">Home</Col>
            </Row>
          </Container>
        </header>
        <h1 className="text-center">
          <img src={require("../Images/JuicyJlight.png")} className="Client-logo" alt="Logo"/>
        </h1>

        <Form className="m-5">
          <h6>Add New Product</h6>
          <FormGroup row>
            <Col sm="9">
              <Label for="product" size="sm">Product</Label>
              <Input type="text" name="product" id="product" placeholder="Product" bsSize="sm"/>
            </Col>
            <Col sm="3">
              <Label for="quantity" size="sm">Quantity</Label>
              <Input type="number" name="quantity" id="quantity" placeholder="Quantity" bsSize="sm"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm="9">
              <Label for="url" size="sm">Image</Label>
              <Input type="url" name="url" id="url" placeholder="Image url" bsSize="sm"/>
            </Col>
            <Col sm="3">
              <Label for="price" size="sm">Price</Label>
              <Input type="text" name="price" id="price" placeholder="Price" bsSize="sm"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="description" size="sm">Description</Label>
            <Input type="textarea" name="description" id="description" bsSize="sm"/>
          </FormGroup>
          <Button size="sm">Submit</Button>
        </Form>

        <section className="m-5">
          <h6>Current Inventory</h6>
          <ul>
            <li>
              Product Name
              <button>Update</button>
              <button>Delete</button>
            </li>

          </ul>
        </section>
      </div>
    );
  }
}

export default Client;