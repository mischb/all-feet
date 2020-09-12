class User {
  private id: number;
  private email: string;
  private firstName: string;
  private lastName: string;
  constructor(email: string, firstName: string, lastName: string) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter $firstName
   * @return {string}
   */
  public get $firstName(): string {
    return this.firstName;
  }

  /**
   * Getter $lastName
   * @return {string}
   */
  public get $lastName(): string {
    return this.lastName;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Setter $firstName
   * @param {string} value
   */
  public set $firstName(value: string) {
    this.firstName = value;
  }

  /**
   * Setter $lastName
   * @param {string} value
   */
  public set $lastName(value: string) {
    this.lastName = value;
  }
}
