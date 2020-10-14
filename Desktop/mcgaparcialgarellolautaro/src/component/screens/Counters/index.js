import React from 'react';

const CounterCard = (props) => {
  return (
    <form className="ContainerHome">
      <div className="CounterStructure">
        <label>Creado:{props.content.created}</label>
        <label>Actualizado:{props.content.updated}</label>
        <div className="CounterInfo">
          <input type="button" className="ButtonCounter" value="-" />
          <input type="button" className="ButtonCounter" value="+" />
          <input type="button" className="ButtonCounter" value="Eliminar" />
        </div>
      </div>
    </form>
  )
}

export default CounterCard;