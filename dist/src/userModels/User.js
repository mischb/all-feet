class User {
    constructor(email, password, firstName, lastName) {
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
    /**
     * Getter $id
     * @return {number}
     */
    get $id() {
        return this.id;
    }
    /**
     * Getter $email
     * @return {string}
     */
    get $email() {
        return this.email;
    }
    /**
     * Getter $firstName
     * @return {string}
     */
    get $firstName() {
        return this.firstName;
    }
    /**
     * Getter $lastName
     * @return {string}
     */
    get $lastName() {
        return this.lastName;
    }
    /**
     * Setter $email
     * @param {string} value
     */
    set $email(value) {
        this.email = value;
    }
    /**
     * Setter $firstName
     * @param {string} value
     */
    set $firstName(value) {
        this.firstName = value;
    }
    /**
     * Setter $lastName
     * @param {string} value
     */
    set $lastName(value) {
        this.lastName = value;
    }
}
