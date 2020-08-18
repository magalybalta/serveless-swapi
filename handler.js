'use strict';

const StarShip = require('./handlers/starship');
const addStarShip = require('./handlers/create');
const listDBStarShip = require('./handlers/listdb');
const viewStarShip = require('./handlers/getById');

const list9 = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    data: await StarShip.getStarShip()
  };

  callback(null, response);
};

const create = (event, context, callback) => {
  const data = JSON.parse(event.body);

  addStarShip(data).then(result => {
    const response = {
      body: JSON.stringify(result)
    };

    callback(null, response);
  }).catch(callback);
};

const listDB = (event, context, callback) => {
  listDBStarShip().then(result => {
    const response = {
      body: JSON.stringify(result)
    };

    callback(null, response);
  }).catch(callback);
};

const getById = (event, context, callback) => {
  viewStarShip(event.pathParameters.id).then(result => {
    const response = {
      body: JSON.stringify(result)
    };

    callback(null, response);
  }).catch(callback);
};

module.exports = {
  list9,
  create,
  listDB,
  getById
};