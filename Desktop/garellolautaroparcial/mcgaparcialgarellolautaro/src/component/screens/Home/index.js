import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import FormUser from '../Form'; 

const Home = (props) => {
  return (
    <BrowserRouter>
    <Route exact path = "/">
      <div className="ContainerHome">  
        <div className="HomeProps">
          <h1>Alumnos</h1>
          <div className="UserInfo">
            <div className="NameUser">
              <label>Nombre: </label>
              <label>{props.name}</label>
            </div>
            <div className="Year">
              <label>Año: </label>
              <label>{props.year}</label>
            </div>
          </div>
          <div className="ButtonsHome">
            <Link to = "/EditForm">
              <button class="BtnHome" type="submit">Editar información</button>
            </Link>
            <button class="BtnHome" type="submit">Agregar contadores</button>
          </div>
        </div>
      </div>
      </Route>
      <Route exact path = "/EditForm" component={FormUser}></Route>
    </BrowserRouter>
  );
};

export default Home