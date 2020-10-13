import React from 'react';
import './App.css'
import '../component/App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './screens/Home';
import Form from './screens/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"Jhon Doe",
      year:"2020"
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="Home">
          <Home 
            name={this.state.name}
            year={this.state.year}
          />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
/*<div className="App">
        <div className="Home">
          <Home 
            name={this.state.name}
            year={this.state.year}
          />
        </div>
      </div>*/
export default App;
