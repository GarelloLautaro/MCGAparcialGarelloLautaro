import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import FormUser from '../Form';
import HomeUser from '../Home';

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [{
        id: 0,
        created: Date(),
        updated: 0,
        counter: 0
      }]
    }
  }


  render() {
    return (
      <BrowserRouter>
        <Route exact path="/Counter" component={CounterList}>
          <div className="formContainer">
            <p>Lista de contadores</p>
            <button>Agregar contador</button>
            <Link className="link" to="/Home">
              <button>Volver al menu</button>
            </Link>
          </div>
        </Route>
        <Route exact path="/Home" component={HomeUser}></Route>
      </BrowserRouter>
    );
  }
}

export default CounterList