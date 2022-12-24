import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500 ;
    constructor(){
        super('Error connecting to db');

        // because we extending a builtin class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors(){
        return [
            {message: 'Error Connecting to the database'}
        ]
    }
}