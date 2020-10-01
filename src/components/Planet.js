import React from 'react';

const Planet = ({ planet }) => {
    return (
        <div className="card">
            <h3>{ planet.id }</h3>
            <p>Population - { planet.title }</p>
            <p>Terrain - { planet.body }</p>
        </div>
    );
}

export default Planet;