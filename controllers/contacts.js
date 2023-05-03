const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// Creating a function to get all the contacts.
const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('Guero').collection('Cobian').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
// Creating a function to get a single contact.
const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('Guero').collection('Cobian').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle};