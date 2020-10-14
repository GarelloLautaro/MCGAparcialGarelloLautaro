import React from 'react';
import './App.css'
import '../component/App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './screens/Home';
import FormUser from './screens/Form';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
     User:{
       name:'Jhon Doe',
       year:2020
     }
    }
  }

  HandleInputChange = (event) => {
    const User=Object.assign({}, this.state.User);
    User.name=event.target("name").value;
    User.year=event.target("year").value;
    this.setState({User:User});
  }

  OnSubmit(values) {
    console.log('Submitting form', values);
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="Home">
          <Home
            name={this.state.User.name}
            year={this.state.User.year}
          />
          <FormUser
            OnSubmit={this.OnSubmit}
            render={FormUser} 
            name={this.state.User.name}
            year={this.state.User.year}
          />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
