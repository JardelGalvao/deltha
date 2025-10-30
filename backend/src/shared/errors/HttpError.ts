class HttpError  extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = this.constructor.name; // Set the error name to the class name
    this.statusCode = statusCode;
    // This line is important for proper inheritance in TypeScript
    // It maintains the correct prototype chain for instances of this class
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError;