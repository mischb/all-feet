export default class Make {
  protected id: number;
  private name: string;
  private models: Array<number>;

  constructor($name: string) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.name = $name;
  }
  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $models
   * @return {Array<number>}
   */
  public get $models(): Array<number> {
    return this.models;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $models
   * @param {Array<number>} value
   */
  public set $models(value: Array<number>) {
    this.models = value;
  }
}
