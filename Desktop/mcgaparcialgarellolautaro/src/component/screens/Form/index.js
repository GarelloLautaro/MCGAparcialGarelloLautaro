import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeCard from '../Home';

function FormUser(props) {
  return (
    <BrowserRouter>
      <Route exact path="/Home">
        <form className="ContainerHome">
          <div className="HomeProps">
            <h2>Alumno</h2>
            <div className="UserInfo">
              <div className="UserName">
                <p>Usuario:</p>
                <Field className="inputField" name="name" component="input" disabled="disable" placeholder={props.name} />
              </div>
              <div className="UserYear">
                <p>Año: </p>
                <Field className="inputField" name="year" component="input" disabled="disable" placeholder={props.year} />
              </div>
            </div>
            <div className="ButtonsHome">
              <Link className="link" to="/EditForm">
                <button className="BtnHome">Editar Información</button>
              </Link>
              <Link className="link" to="/Counter">
                <button className="BtnHome">Agregar Contador</button>
              </Link>
            </div>
          </div>
        </form>
      </Route>
      <Route exact path="/EditForm">
        <form className="ContainerForm">
          <div className="FormProps">
            <h2>Alumno</h2>
            <div className="UserInfoEdit">
              <div className="UserNameEdit">
                <p>Usuario:</p>
                <Field className="inputField" name="name" component="input" placeholder={props.name} />
              </div>
              <div className="UserYearEdit">
                <p>Año: </p>
                <Field className="inputField" name="year" component="input" placeholder={props.year} />
              </div>
            </div>
            <div className="ButtonsEdit">
              <Link className="link" to="/Home">
                <button className="BtnEdit" onClick={props.handleInputChange}>Guardar Información</button>
              </Link>
              <Link className="link" to="/Counter">
                <button className="BtnEdit" disabled="disable">Agregar Contador</button>
              </Link>
            </div>
          </div>
        </form>
      </Route>
      <Route exact path="/Counter" component={FormUser}></Route>
    </BrowserRouter>
  );
};

export default FormUser