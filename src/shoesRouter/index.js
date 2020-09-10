const express = require("express");
const {
  getOrcreateShoeItem,
  getAllShoeModels,
  deleteShoeModel,
  getShoeById,
} = require("./sqlUtils");

const { Make, Model } = require("../shoeModels");

/**
 * Shoe Routes -- get, post and delete
 */

const router = express.Router();

const parseQuery = (req, res, next) => {
  if (!req.query) next();

  req.parsedQuery = {};
  const { model, brand } = req.query;
  if (model) req.parsedQuery["shoe_model.name"] = model;

  if (brand) req.parsedQuery["shoe_make.name"] = brand;

  next();
};

/**
 * get endpoint receives optional query params: model and brand
 * for filtering results4
 */

router.get("/", parseQuery, async (req, res) => {
  try {
    const shoes = await getAllShoeModels(req.parsedQuery);
    res.send(shoes);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post("/add-shoe", async (req, res, next) => {
  const requiredFields = ["makeName", "modelName"];
  const { makeName, modelName, type } = req.body;

  const missingFields = requiredFields.filter((field) => !(field in req.body));
  if (missingFields.length) {
    res.statusMessage = `${missingFields.join(" and ")} are required fields`;
    res.sendStatus(400);
    return;
  }
  let makeId;
  try {
    makeId = await getOrcreateShoeItem(new Make(makeName), {
      name: makeName,
    });
  } catch (e) {
    next(e);
  }

  try {
    let newShoeId = await getOrcreateShoeItem(
      new Model(modelName, type, makeId),
      {
        name: modelName,
        type: type,
        makeId: makeId,
      }
    );
    let shoe = await getShoeById(newShoeId);
    res.statusCode = 201;
    res.send(shoe);
  } catch (error) {
    next(error);
  }
});

router.delete("/remove-shoe", async (req, res, next) => {
  const key = req.query.id ? "id" : "name";
  const value = req.query.id || req.query.name;

  if (!value) {
    res.sendStatus(200);
  }

  try {
    await deleteShoeModel(key, value);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  router,
};
