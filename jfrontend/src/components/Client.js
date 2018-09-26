import React, {Component} from "react";
import ClientHeader from "./ClientHeader";
import ClientForm from "./ClientForm";
import {Form, FormGroup, Label, Input} from "reactstrap";
import "../App.css";


class Client extends Component {

  constructor(props) {
    super(props)
    this.state = {
      objectID: [],
      selectedObject: {},

  }
}
  
  createSelectItems= () => {
    return this.props.data.map((type, i) =>  {
      return  (
        <option key={i} id={type.id}>
          {type.name}
        </option> 
      )
    })
  }

  getCorrectObject = () => {
    // console.log("this.props.data", this.props.data)
    
    
    let correctObject = this.props.data.filter((type)  =>  {
      console.log("ojbect being filtered", type)
      return type.id === this.state.objectID

    })
    console.log("correctObject", correctObject)



    return this.setState({selectedObject: correctObject})
    console.log("selected object", this.state.selectedObject)
  }

  
  change = (event) => {
    this.setState({objectID: event.target.options[event.target.selectedIndex].id})
    this.getCorrectObject()
    this.setState(this.state.selectedObject = this.props.data[this.state.objectID])
    console.log("selected object", this.state.selectedObject)
  
    
    console.log("event.id", event.target.options[event.target.selectedIndex].id)
    console.log("this.state.objectID", this.state.objectID)
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
        <h5>Select Item to Update or Delete</h5>
        <form id="itemsForm">
          <select onChange={this.change}>
            <option defaultValue value="select">Select</option>
            {this.createSelectItems()}
          </select>  
          
        </form>      
        <ClientForm productDetails={this.state.obj} />

      </div>
    );
  }
}


export default Client;