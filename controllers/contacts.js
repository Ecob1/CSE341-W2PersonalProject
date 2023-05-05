const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
// Creating a function to get all the contacts.
const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db("Guero").collection("Cobian").find();

  
  result.toArray().then((lists) => {
    console.log(lists)
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};
// Creating a function to get a single contact.
const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("Guero")
    .collection("Cobian")
    .find({_id: userId});
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

// Creating a function to create a contact.
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db("Guero")
    .collection("Cobian")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the contact."
      );
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db("Guero")
    .collection("Cobian")
    .replaceOne({_id: userId}, contact);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the contact."
      );
  }
};

const deleteContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("Guero")
    .collection("Cobian")
    .deleteOne({_id: userId}, true);
  console.log(result);
  if (result.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(result.error || "Some error occurred while deleted the contact.");
  }
};
module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
