import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Client from "./components/Client";
import ClientForm from './components/ClientForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      categories: []
    }
  }

  componentDidMount() {
    this.getData()
    this.getCategories()
  }

  

  getData = () => {
    fetch("https://j-j-data.herokuapp.com/") 
    .then(result => result.json())
    .then(result => this.setState({
      data: result.data
    }))
  }

  getCategories = () => {
    fetch(`http://j-j-data.herokuapp.com/categories`)
    .then(result => result.json())
    .then(result => this.setState({
      categories: result.data
    }))
  }

  selectCategory = (id) => {
    fetch(`http://j-j-data.herokuapp.com/${id}`)
    .then(result => result.json())
    .then(result => this.setState({
      data: result.data
    }))
  }

  render() {
    {console.log('this.props.auth', this.props.auth)}
    let mainComponent = "";
    switch(this.props.location){
      case "":
        mainComponent = <div>
          <Header />
          <Main {...this.props} categories={this.state.categories} data={this.state.categories}/>;
          <button onClick={this.props.auth.login}>Login</button>
          <Footer />
          </div>
        break;
      // case "callback":
      //   mainComponent = <Client />;
      //   break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <ClientForm {...this.props} categories={this.state.categories} data={this.state.categories} /> : <ClientForm/>
        break;
      default:
        mainComponent = <ClientForm />;
      
    }

  return (
    <div className="App">
      {mainComponent}
    </div>
    
    );
  }
}

  export default App;

