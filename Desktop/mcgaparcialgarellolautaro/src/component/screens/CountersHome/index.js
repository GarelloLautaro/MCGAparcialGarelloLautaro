import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeUser from '../Home';
import CounterCard from '../Counters';

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Counters: [{
        id: 0,
        created: Date(),
        updated: 0,
        Counter: 0
      }]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/Counter" component={CounterList}>
          <div className="formContainer">
            <p>Lista de contadores</p>
            <button className="BtnHome">Agregar contador</button>
            <Link className="link" to="/Home">
              <button className="BtnHome">Volver al menu</button>
            </Link>
            {this.state.Counters.map(content =>
              <CounterCard
                content={content}
                key={content.id}
              />
            )}
          </div>
        </Route>
        <Route exact path="/Home" component={HomeUser}></Route>
      </BrowserRouter>
    );
  }
}

export default CounterList