var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const { getOrcreateShoeItem, getAllShoeModels, deleteShoeModel, getShoeById, } = require("./sqlUtils");
const { Make, Model } = require("../shoeModels");
/**
 * Shoe Routes -- get, post and delete
 */
const router = express.Router();
const parseQuery = (req, res, next) => {
    if (!req.query)
        next();
    req.parsedQuery = {};
    const { model, brand } = req.query;
    if (model)
        req.parsedQuery["shoe_model.name"] = model;
    if (brand)
        req.parsedQuery["shoe_make.name"] = brand;
    next();
};
/**
 * get endpoint receives optional query params: model and brand
 * for filtering results4
 */
router.get("/", parseQuery, (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const shoes = yield getAllShoeModels(req.parsedQuery);
        res.send(shoes);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}));
router.post("/add-shoe", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
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
        makeId = yield getOrcreateShoeItem(new Make(makeName), {
            name: makeName,
        });
    }
    catch (e) {
        next(e);
    }
    try {
        let newShoeId = yield getOrcreateShoeItem(new Model(modelName, type, makeId), {
            name: modelName,
            type: type,
            makeId: makeId,
        });
        let shoe = yield getShoeById(newShoeId);
        res.statusCode = 201;
        res.send(shoe);
    }
    catch (error) {
        next(error);
    }
}));
router.delete("/remove-shoe", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const key = req.query.id ? "id" : "name";
    const value = req.query.id || req.query.name;
    if (!value) {
        res.sendStatus(200);
    }
    try {
        yield deleteShoeModel(key, value);
        res.sendStatus(200);
    }
    catch (error) {
        next(error);
    }
}));
module.exports = {
    router,
};
