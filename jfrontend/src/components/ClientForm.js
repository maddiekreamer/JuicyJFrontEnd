import React, {Component} from "react";
import SubmitButton from "./SubmitButton";
import {Col, Form, FormGroup, Label, Input, Button} from "reactstrap";
import "../App.css";

class ClientForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: "",
      quantity: "",
      categoryID: "",
      url: "",
      price: "",
      description: "",

    }
  }


  onClick = (e) => {
    this.setState({
      product: this.props.productDetails.name,
      quantity: this.props.productDetails.quantity,
      categoryID: this.props.productDetails.category,
      url: this.props.productDetails.image_URL,
      price: this.props.productDetails.price,
      description: this.props.productDetails.description
    }) 
  }
 
  render() {

    return (
        <Form className="m-5">
          <h6>Add New Product</h6>
          <FormGroup row>
            <Button onClick={this.onClick}>Add Info</Button>
            <Col sm="8">
              <Label for="product" size="sm">Product</Label>
              <Input type="text" name="product" id="product" placeholder="Product" bsSize="sm" ref="product" value={this.state.product}/>
            </Col>
            <Col sm="2">
              <Label for="quantity" size="sm">Quantity</Label>
              <Input type="number" name="quantity" id="quantity" placeholder="Quantity" bsSize="sm" ref="quantity" value={this.state.quantity}/>
            </Col>
            <Col sm="2">
              <Label for="category" size="sm">Category</Label>
              <Input type="number" name="category" id="category" placeholder="Category" bsSize="sm" ref="category" value={this.state.category}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm="9">
              <Label for="url" size="sm">Image</Label>
              <Input type="url" name="url" id="url" placeholder="Image url" bsSize="sm" ref="url" value={this.state.url}/>
            </Col>
            <Col sm="3">
              <Label for="price" size="sm">Price</Label>
              <Input type="text" name="price" id="price" placeholder="Price" bsSize="sm" ref="price" value={this.state.price}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="description" size="sm">Description</Label>
            <Input type="textarea" name="description" id="description" bsSize="sm" ref="description" value={this.state.description}/>
          </FormGroup>
          <Button>
            Add New Product
          </Button>
          <Button>
            Update Product Info
          </Button>
          <Button>
            Delete
          </Button>

        </Form>

    )
  }
  
}

export default ClientForm;