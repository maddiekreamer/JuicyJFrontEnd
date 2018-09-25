import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData()
  }  

    getData = () => {
    fetch("https://j-j-data.herokuapp.com/") 
    .then(result => result.json())
    .then(result => this.setState({
      data: result
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main data = {this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
