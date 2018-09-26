import React from "react";
import SubmitButton from "./SubmitButton";
import {Col, Form, FormGroup, Label, Input} from "reactstrap";
import "../App.css";

const ClientForm = (props) => {

  return (
      <Form className="m-5">
        <h6>Add New Product</h6>
        <FormGroup row>
          <Col sm="8">
            <Label for="product" size="sm">Product</Label>
            <Input type="text" name="product" id="product" placeholder="Product" bsSize="sm"/>
          </Col>
          <Col sm="2">
            <Label for="quantity" size="sm">Quantity</Label>
            <Input type="number" name="quantity" id="quantity" placeholder="Quantity" bsSize="sm"/>
          </Col>
          <Col sm="2">
            <Label for="category" size="sm">Category</Label>
            <Input type="number" name="category" id="category" placeholder="Category" bsSize="sm"/>
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
        <SubmitButton />
      </Form>

  )
}

export default ClientForm;