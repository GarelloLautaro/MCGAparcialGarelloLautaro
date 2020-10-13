import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";
import { BrowserRouter, Link, Route } from 'react-router-dom';

const FormUser = (props) => {
    return (
        <BrowserRouter>
        <div className="ContainerForm">
            <Form onSubmit={() => {}}>
                {
                    ({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="FormProps">
                                <h1>Alumnos</h1>
                                <label>Nombre: </label>
                                <input defaultValue={props.name} type="text"/>
                                <label>Año: </label>
                                <input defaultValue={props.year} type="text"/>
                                <Link className="link" to="/EditUser">
                                    <button class="btn" type="submit">Guardar información</button>
                                </Link>
                                <button class="btn" type="submit">Agregar contadores</button>
                            </div>
                        </form>
                    )
                }
            </Form>
        </div>
        <Route exact path="/EditUser" component={Form}></Route>
    </BrowserRouter>
    );
};

export default FormUser