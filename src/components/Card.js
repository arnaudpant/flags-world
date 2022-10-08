import React from 'react';

const Card = ( props ) => {
    return (
        <li className="card">
            <img src={props.country.flags.svg} alt={"Drapeau" +  props.country.translations.fra.common}/>
            <div className="infos">
                <h2>{props.country.translations.fra.common}</h2>
                <h4>{props.country.capital}</h4>
                <p>Pop: {props.country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card; 