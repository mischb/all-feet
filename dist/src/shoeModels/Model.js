"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Make_1 = require("./Make");
/**
 * Model class refers to individual shoes
 */
class Model extends Make_1.default {
    constructor(type, make) {
        super(name);
        this.modelId = Date.now() + Math.floor(Math.random() * 10);
        this.type = type;
        this.make = make;
    }
    /**
     * Getter $modelId
     * @return {number}
     */
    get $modelId() {
        return this.modelId;
    }
    /**
     * Getter $type
     * @return {string}
     */
    get $type() {
        return this.type;
    }
    /**
     * Getter $make
     * @return {Make}
     */
    get $make() {
        return this.make;
    }
    /**
     * Setter $modelId
     * @param {number} value
     */
    set $modelId(value) {
        this.modelId = value;
    }
    /**
     * Setter $type
     * @param {string} value
     */
    set $type(value) {
        this.type = value;
    }
    /**
     * Setter $make
     * @param {Make} value
     */
    set $make(value) {
        this.make = value;
    }
}
exports.default = Model;
