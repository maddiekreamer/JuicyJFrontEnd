import React, {Component} from "react";
import ClientHeader from "./ClientHeader";
import ClientForm from "./ClientForm";
import "../App.css";
import ClientDropdown from "./ClientDropdown"



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
    this.setState(this.state.selectedObject = this.props.data[num])
  }

  render() {
    return (
      <div>
        <ClientHeader />
        <div className="container text-center" id="Client-dropdown">
        <ClientDropdown createSelectItems={this.createSelectItems} change={this.change} />
        </div>
        <ClientForm productDetails={this.state.selectedObject} />
      </div>
    );
  }
}


export default Client;