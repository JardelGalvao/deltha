"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.constructor.name; // Set the error name to the class name
        this.statusCode = statusCode;
        // This line is important for proper inheritance in TypeScript
        // It maintains the correct prototype chain for instances of this class
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
exports.default = HttpError;
