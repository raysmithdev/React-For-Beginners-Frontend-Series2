import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'

class App extends Component {

  constructor() {
    super()

    this.state = {
      cupsOfCoffee: 1,
      name: 'Ray'
    }
  }

  changeName(name) {
    this.setState({name, cupsOfCoffee: 2})
  }

  render() {
    return (
      <div className="App">
        <NavBar
          name={this.state.name}
          coffees={this.state.cupsOfCoffee}
        />
        <MainBody
          text="This is our main body passed down via PROPS!"
          changeName={this.changeName.bind(this)}
        />
      </div>
    );
  }
}

export default App;
