'use strict';

const axios = require('axios').default;

//module.exports = async () => {
async function getStarShip(){
    const starShip1 = await axios.get("https://swapi.py4e.com/api/starships/9/");

    const result = {
        nombre: `${starShip1.data.name}`,
        modelo: `${starShip1.data.model}`,
        costo_credito: `${starShip1.data.cost_in_credits}`,
        longitud: `${starShip1.data.length}`,
        velocidad_max_atm: `${starShip1.data.max_atmosphering_speed}`,
        tripulacion: `${starShip1.data.crew}`,
        pasajeros: `${starShip1.data.passengers}`,
        capacidad_cargo: `${starShip1.data.cargo_capacity}`,
        consumibles: `${starShip1.data.consumables}`,
        calificacion_hiperimpulsor: `${starShip1.data.hyperdrive_rating}`,
        MGLT: `${starShip1.data.MGLT}`,
        clase_navestelar: `${starShip1.data.starship_class}`,
        pilotos: `${starShip1.data.pilots}`,
        peliculas: `${starShip1.data.films}`,
        creacion: `${starShip1.data.created}`,
        modificacion: `${starShip1.data.edited}`,
        url: `${starShip1.data.url}`,
    };

    return result;
};

module.exports = { getStarShip };