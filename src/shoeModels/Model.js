const Make = require("./Make");

class Model extends Make {
  _id;
  _type;
  _makeId;

  constructor(name, type, makeId) {
    super(name);
    this._id = Date.now() + Math.floor(Math.random() * 10);
    this._type = type;
    this._makeId = makeId;
    this._tableName = "shoe_model";
  }

  insert() {
    return {
      id: this._id,
      name: super.name,
      makeId: parseInt(this._makeId),
      type: this._type,
    };
  }

  get tableName() {
    return this._tableName;
  }

  /**
   * Getter id
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * Getter type
   * @return {string}
   */
  get type() {
    return this._type;
  }

  /**
   * Getter make
   * @return {Make}
   */
  get makeId() {
    return this._makeId;
  }

  /**
   * Setter id
   * @param {number} value
   */
  set id(value) {
    this._id = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  set type(value) {
    this._type = value;
  }

  /**
   * Setter make
   * @param {Make} value
   */
  set makeId(value) {
    this._makeId = value;
  }
}

module.exports = Model;
