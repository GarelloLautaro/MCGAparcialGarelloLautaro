import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import FormUser from '../Form';

class HomeUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      User: {
        name: 'Jhon Doe',
        year: 2020
      }
    }
  }

  HandleInputChange = (event) => {
    const User = Object.assign({}, this.state.User);
    User.name = event.target("name").value;
    User.year = event.target("year").value;
    this.setState({ User: User });
  }

  onSubmit(values) {
    console.log('Submitting form', values);
  }

  render() {
    return (
      <BrowserRouter>
        <Redirect to="/Home" />
        <Route exact path="/Home" component={HomeUser}>
          <div className="formContainer">
            <Form
              onSubmit={this.onSubmit}
              render={FormUser}
              name={this.state.User.name}
              year={this.state.User.year}
            />
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default HomeUser