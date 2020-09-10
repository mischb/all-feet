class Make {
  _id;
  _name;
  _models;

  constructor(name) {
    this._id = Date.now() + Math.floor(Math.random() * 1000);
    this._name = name;
    this._tableName = "shoe_make";
    this._models = {};
  }

  insert() {
    return {
      id: this._id,
      name: this._name,
    };
  }

  addModel(model) {
    this._models[model.id] = model;
  }

  removeModel(modelId) {
    this._models.delete(modelId);
  }

  getModels() {
    return this._models.values;
  }

  get tableName() {
    return this._tableName;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set id(value) {
    this._id = value;
  }

  set name(value) {
    this._name = value;
  }
}

module.exports = Make;
