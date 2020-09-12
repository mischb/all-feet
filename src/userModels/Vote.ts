export class Vote {
  private userId: number;
  private id: number;
  private modelId: number;
  private size: number;
  private width: string;

  constructor(modelId: number, size: number, width: string, userId: number) {
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
  public get $userId(): number {
    return this.userId;
  }

  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $modelId
   * @return {number}
   */
  public get $modelId(): number {
    return this.modelId;
  }

  /**
   * Getter $size
   * @return {number}
   */
  public get $size(): number {
    return this.size;
  }

  /**
   * Getter $width
   * @return {string}
   */
  public get $width(): string {
    return this.width;
  }

  /**
   * Setter $modelId
   * @param {number} value
   */
  public set $modelId(value: number) {
    this.modelId = value;
  }

  /**
   * Setter $size
   * @param {number} value
   */
  public set $size(value: number) {
    this.size = value;
  }

  /**
   * Setter $width
   * @param {string} value
   */
  public set $width(value: string) {
    this.width = value;
  }
}
