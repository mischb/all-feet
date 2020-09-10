/**
 * Knex queries for model/make tables
 */

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
const getAllShoeModels = async (query) => {
  return knex("shoe_model")
    .select(shoeQuery)
    .where(query)
    .innerJoin("shoe_make", "shoe_model.makeId", "shoe_make.id")
    .limit(100);
};

const getShoeById = async (id) => {
  return knex("shoe_model")
    .select(shoeQuery)
    .where({ "shoe_model.id": id })
    .innerJoin("shoe_make", "shoe_model.makeId", "shoe_make.id")
    .first();
};

const getShoeItem = async (tableName, query) => {
  return knex(tableName).where(query).first();
};

const getMakeById = async (id) => {
  return knex("shoe_make").where(id);
};

//-----create

const getOrcreateShoeItem = async (item, query) => {
  const existingItem = await getShoeItem(item.tableName, query);
  let id;

  if (existingItem) {
    id = existingItem.id;
  } else {
    id = await knex.insert(item.insert()).into(item.tableName).returning("id");
  }
  return id;
};

const deleteShoeModel = async (field, item) => {
  return knex("shoe_model").where(field, item).del().returning("id");
};

module.exports = {
  getOrcreateShoeItem,
  getAllShoeModels,
  deleteShoeModel,
  getShoeById,
};
