import React, {Component} from "react";
import {Col, Form, FormGroup, Label, Input, Button} from "reactstrap";
import "../App.css";

class ClientForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      quantity: "",
      categoryID: "",
      image_URL: "",
      price: "",
      description: "",

    }
  }

  onClick = (e) => {
    this.setState({
      name: this.props.productDetails.name,
      quantity: this.props.productDetails.quantity,
      categoryID: this.props.productDetails.category,
      image_URL: this.props.productDetails.image_URL,
      price: this.props.productDetails.price,
      description: this.props.productDetails.description
    }) 
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value   
    })
    console.log("state ", this.state)
  }

  handleSubmitPost = (e) => {
    e.preventDefault();
    const body = JSON.stringify(this.state);
    console.log("body ", body)
    fetch("https://j-j-data.herokuapp.com", {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: body
    })
    .then(response => console.log(response));
    e.target.reset();
  }

 
  render() {

    return (
        <Form className="m-5" onSubmit={this.handleSubmitPost}>
          <h6>Add New Product</h6>
          <FormGroup row>
            <Button onClick={this.onClick}>Add Info</Button>
            <Col sm="8">
              <Label for="name" size="sm">Product</Label>
              <Input type="text" name="name" id="product" placeholder="Product" bsSize="sm" ref="product" value={this.state.name} onChange={this.handleChange}/>
            </Col>
            <Col sm="2">
              <Label for="quantity" size="sm">Quantity</Label>
              <Input type="number" name="quantity" id="quantity" placeholder="Quantity" bsSize="sm" ref="quantity" value={this.state.quantity} onChange={this.handleChange}/>
            </Col>
            <Col sm="2">
              <Label for="category" size="sm">Category</Label>
              <Input type="number" name="categoryID" id="category" placeholder="Category" bsSize="sm" ref="category" value={this.state.category} onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm="9">
              <Label for="image_URL" size="sm">Image</Label>
              <Input type="url" name="image_URL" id="url" placeholder="Image url" bsSize="sm" ref="url" value={this.state.image_URL} onChange={this.handleChange}/>
            </Col>
            <Col sm="3">
              <Label for="price" size="sm">Price</Label>
              <Input type="text" name="price" id="price" placeholder="Price" bsSize="sm" ref="price" value={this.state.price} onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="description" size="sm">Description</Label>
            <Input type="textarea" name="description" id="description" bsSize="sm" ref="description" value={this.state.description} onChange={this.handleChange}/>
          </FormGroup>
          <Button >
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