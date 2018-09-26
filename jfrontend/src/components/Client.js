import React, {Component} from "react";
import ClientHeader from "./ClientHeader";
import ClientForm from "./ClientForm";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import "../App.css";


class Client extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  // componentDidMount() {
  //   return fetch("https://j-j-data.herokuapp.com/")
  //   .then(response => response.json())
  //   .then(result => {
  //     this.setState({
  //       data: result.data
  //     })
  //   })
  // }  
  
  createSelectItems() {
    return this.props.data.map((type, i) =>  {
      return  (
        <option key={i} id={type.id}>
          {type.name}
        </option> 
      )
    })
  }

  render() {
    return (
      <div>
        <header className="Client-head">
          <ClientHeader />
        </header>
        <h1 className="text-center">
          <img src={require("../Images/JuicyJlight.png")} className="Client-logo" alt="Logo"/>
        </h1>

        <ClientForm />
        
        <Form className="m-5">
          <FormGroup>
            <Label for="productList">Product List</Label>
            <Input type="select" name="productList" id="productList" >
              <option value disabled>Select Product</option>
              {this.createSelectItems()}
            </Input>
          </FormGroup>
        </Form>

      </div>
    );
  }
}

export default Client;