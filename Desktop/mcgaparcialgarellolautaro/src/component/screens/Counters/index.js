import React from 'react';

const CounterCard = (props) => {
    return (
        <ul className="CounterStructure">
            <li>
                Creado:{props.created}
            </li>
            <li>
                Actualizado:{props.updated}
            </li>
            <li className="CounterInfo">
                <button className="ButtonCounter">-</button>
                <div>{props.counter}</div>
                <button className="ButtonCounter">+</button>
                <button className="ButtonCounter">Eliminar</button>
            </li>
        </ul>
    )
}
export default CounterCard;