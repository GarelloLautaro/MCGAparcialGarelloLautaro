import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";

const Home = (props) => {
  return (
      <div className="ContainerHome">  
         <div className="HomeProps">
         <h1>Alumnos</h1>
          <label>Nombre: </label>
         <p>{props.name}</p>
          <label>Año: </label>
          <p>{props.year}</p>
          <div>
          <button class="btn" type="submit">Editar información</button>
          <button class="btn" type="submit">Agregar contadores</button>
         </div>
        </div>
      </div>
  );
};

export default Home