import './style.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeUser from '../Home';
import CounterCard from '../Counters';

class CounterList extends React.Component {
  constructor(props) {
    super(props)
    this.CountId = 0;
    this.state = {
      Counters: [],
      id: "",
    }
  }

  AddCount = () => {
    this.CountId = this.CountId + 1;
    const CopyCounters = Object.assign([], this.state.Counters)
    CopyCounters.push({
      id: this.CountId
    })
    this.setState({
      Counters: CopyCounters,
    })
    console.log(this.state.Counters)
  }

  /* DeleteCount = (index) => {
     const CopyCounters = Object.assign([], this.state.Counters);
     CopyCounters.splice(index, 1);
     this.setState({
       Counters: CopyCounters
     })
   }*/


  render() {
    return (
      <BrowserRouter>
        <Route exact path="/Counter" component={CounterList}>
          <div className="formContainer">
            <p>Lista de contadores</p>
            <button className="BtnHome" onClick={this.AddCount}>Agregar contador</button>
            <Link className="link" to="/Home">
              <button className="BtnHome">Volver al menu</button>
            </Link>
            {this.state.Counters.map(content =>
              <CounterCard
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