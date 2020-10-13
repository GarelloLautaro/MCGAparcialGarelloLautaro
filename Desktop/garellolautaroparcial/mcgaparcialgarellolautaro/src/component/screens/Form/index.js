import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeCard from '../Home';

const FormUser = (props) => {
    return (
        <BrowserRouter>
            <Route exact path = "/EditForm">
                <div className="ContainerForm">
                    <Form onSubmit={() => {}}>{
                        ({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                    <div className="FormProps">
                    <h1>Alumnos</h1>
                    <div className="UserEdit">
                        <label>Nombre: </label>
                        <input defaultValue={props.name} type="text"/>
                    </div>
                    <div className="YearEdit">
                        <label>Año: </label>
                        <input defaultValue={props.year} type="text"/>
                    </div>
                    <div className="ButtonsForm">
                        <Link className="link" to="/">
                            <button class="BtnForm" type="submit">Guardar información</button>
                        </Link>
                        <button class="BtnForm" type="submit">Agregar contadores</button>
                    </div>
                    </div>
                    </form>)}
                    </Form>
                </div>
            </Route>
            <Route exact path="/" component={HomeCard}></Route>
        </BrowserRouter>
    );
};

export default FormUser