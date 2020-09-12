"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Make {
    constructor($name) {
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        this.name = $name;
    }
    /**
     * Getter $id
     * @return {number}
     */
    get $id() {
        return this.id;
    }
    /**
     * Getter $name
     * @return {string}
     */
    get $name() {
        return this.name;
    }
    /**
     * Getter $models
     * @return {Array<number>}
     */
    get $models() {
        return this.models;
    }
    /**
     * Setter $id
     * @param {number} value
     */
    set $id(value) {
        this.id = value;
    }
    /**
     * Setter $name
     * @param {string} value
     */
    set $name(value) {
        this.name = value;
    }
    /**
     * Setter $models
     * @param {Array<number>} value
     */
    set $models(value) {
        this.models = value;
    }
}
exports.default = Make;
