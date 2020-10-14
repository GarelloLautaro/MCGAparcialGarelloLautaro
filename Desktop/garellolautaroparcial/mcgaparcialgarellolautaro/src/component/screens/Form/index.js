import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeCard from '../Home';

function FormUser(props) {
    return (
        <BrowserRouter>
            <Route exact path = "/EditForm">
                <div className="ContainerForm">
                <div className="FormProps">
                    <h1>Alumnos</h1>
                    <div className="UserEdit">
                        <label>Nombre: </label>
                        <input onChange={props.HandleInputChange} type="text"/>
                    </div>
                    <div className="YearEdit">
                        <label>Año: </label>
                        <input onChange={props.HandleInputChange} type="text"/>
                    </div>
                    <div className="ButtonsForm">
                        <Link className="link" to="/">
                            <button class="BtnForm" type="submit" onClick={props.HandleInputChange}>Guardar información</button>
                        </Link>
                        <button class="BtnForm" type="submit" disabled="disabled">Agregar contadores</button>
                    </div>
                    </div>
                </div>
            </Route>
            <Route exact path="/" component={HomeCard}></Route>
        </BrowserRouter>
    );
};

export default FormUser