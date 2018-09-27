import React, {Component} from "react";
import ClientHeader from "./ClientHeader";
import ClientForm from "./ClientForm";
import "../App.css";


class Client extends Component {

  constructor(props) {
    super(props)
    this.state = {
        selectedObject: {},

  }
}
  
  createSelectItems= () => {
    return this.props.data.map((type, i) =>  {
      return  (
        <option key={i}>
          {type.id} - {type.name}
        </option> 
      )
    })
  }
  
  change = (event) => {
    let num = event.target.options[event.target.selectedIndex].index - 1
    console.log("run it", num)
    this.setState(this.state.selectedObject = this.props.data[num])
    console.log("selected object", this.state.selectedObject)  
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
        <ClientForm productDetails={this.state.selectedObject} />

      </div>
    );
  }
}


export default Client;