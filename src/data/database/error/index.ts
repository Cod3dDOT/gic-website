export class DatabaseError extends Error {
    constructor(msg: string = "Default database error") {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}
