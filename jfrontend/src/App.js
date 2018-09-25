import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
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
<<<<<<< HEAD
        <Main data = {this.state.data} />
=======
        <Main />

>>>>>>> 5a4920fdfe532122d6cadfcaf565d09de7edbdbc
        <Footer />
      </div>
    );
  }
}

export default App;
