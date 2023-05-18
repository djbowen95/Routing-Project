const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  const { errors } = req.body;

  if (errors) {
    const newError = {
      errors,
      error_id: uuidv4(),
    };

    readAndAppend(newError, './db/diagnostics.json');

    const response = {
      status: success,
      body: newError,
    }

    res.json(response)
  } else {
    res.json('Error in posting to diagnostics');
  }


  // TODO: Logic for appending data to the db/diagnostics.json file
});

module.exports = diagnostics;
