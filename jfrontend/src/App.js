import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
    console.log(this.state.data)
    console.log(this.state.categories)
    return (
      <div className="App">
        <Header />
        <Main data = {this.state.data}
              categories={this.state.categories}
              selectCategory={this.selectCategory}
              getData={this.getData} />
        <Footer />
      </div>
    );
  }
}

export default App;
