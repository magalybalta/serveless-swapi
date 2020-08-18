'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (data) => {
    const params = {
        TableName: 'starShip',
        Item: {
            id: uuid.v1(),
            nombre: data.nombre,
            modelo: data.modelo,
            costo_credito: data.costo_credito,
            longitud: data.longitud,
            //addedAt: Date.now(),
        }
    };
    return dynamoDb.put(params).promise()
        .then(result => params.Item)
};