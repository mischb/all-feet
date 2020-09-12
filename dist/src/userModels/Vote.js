"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
class Vote {
    constructor(modelId, size, width, userId) {
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        this.userId = userId;
        this.modelId = modelId;
        this.size = size;
        this.width = width;
    }
    /**
     * Getter $userId
     * @return {string}
     */
    get $userId() {
        return this.userId;
    }
    /**
     * Getter $id
     * @return {number}
     */
    get $id() {
        return this.id;
    }
    /**
     * Getter $modelId
     * @return {number}
     */
    get $modelId() {
        return this.modelId;
    }
    /**
     * Getter $size
     * @return {number}
     */
    get $size() {
        return this.size;
    }
    /**
     * Getter $width
     * @return {string}
     */
    get $width() {
        return this.width;
    }
    /**
     * Setter $modelId
     * @param {number} value
     */
    set $modelId(value) {
        this.modelId = value;
    }
    /**
     * Setter $size
     * @param {number} value
     */
    set $size(value) {
        this.size = value;
    }
    /**
     * Setter $width
     * @param {string} value
     */
    set $width(value) {
        this.width = value;
    }
}
exports.Vote = Vote;
