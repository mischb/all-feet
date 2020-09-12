/**
 * Knex queries for model/make tables
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const knex = require("../../knex");
const shoeQuery = [
    "shoe_model.id",
    "shoe_model.name as model_name",
    "shoe_model.type",
    "shoe_model.pic_url",
    "shoe_make.name as make_name",
    "shoe_make.id as make_id",
];
//------get
const getAllShoeModels = (query) => __awaiter(this, void 0, void 0, function* () {
    return knex("shoe_model")
        .select(shoeQuery)
        .where(query)
        .innerJoin("shoe_make", "shoe_model.makeId", "shoe_make.id")
        .limit(100);
});
const getShoeById = (id) => __awaiter(this, void 0, void 0, function* () {
    return knex("shoe_model")
        .select(shoeQuery)
        .where({ "shoe_model.id": id })
        .innerJoin("shoe_make", "shoe_model.makeId", "shoe_make.id")
        .first();
});
const getShoeItem = (tableName, query) => __awaiter(this, void 0, void 0, function* () {
    return knex(tableName).where(query).first();
});
const getMakeById = (id) => __awaiter(this, void 0, void 0, function* () {
    return knex("shoe_make").where(id);
});
//-----create
const getOrcreateShoeItem = (item, query) => __awaiter(this, void 0, void 0, function* () {
    const existingItem = yield getShoeItem(item.tableName, query);
    let id;
    if (existingItem) {
        id = existingItem.id;
    }
    else {
        id = yield knex.insert(item.insert()).into(item.tableName).returning("id");
    }
    return id;
});
const deleteShoeModel = (field, item) => __awaiter(this, void 0, void 0, function* () {
    return knex("shoe_model").where(field, item).del().returning("id");
});
module.exports = {
    getOrcreateShoeItem,
    getAllShoeModels,
    deleteShoeModel,
    getShoeById,
};
