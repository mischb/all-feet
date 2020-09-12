import Make from "./Make";

/**
 * Model class refers to individual shoes
 */

export default class Model extends Make {
  private modelId: number;
  private type: string;
  private make: Make;

  constructor(type: string, make: Make) {
    super(name);
    this.modelId = Date.now() + Math.floor(Math.random() * 10);
    this.type = type;
    this.make = make;
  }

  /**
   * Getter $modelId
   * @return {number}
   */
  public get $modelId(): number {
    return this.modelId;
  }

  /**
   * Getter $type
   * @return {string}
   */
  public get $type(): string {
    return this.type;
  }

  /**
   * Getter $make
   * @return {Make}
   */
  public get $make(): Make {
    return this.make;
  }

  /**
   * Setter $modelId
   * @param {number} value
   */
  public set $modelId(value: number) {
    this.modelId = value;
  }

  /**
   * Setter $type
   * @param {string} value
   */
  public set $type(value: string) {
    this.type = value;
  }

  /**
   * Setter $make
   * @param {Make} value
   */
  public set $make(value: Make) {
    this.make = value;
  }

  // insert() {
  //   return {
  //     id: this._id,
  //     name: super.name,
  //     makeId: parseInt(this._makeId),
  //     type: this._type,
  //   };
  // }
}
