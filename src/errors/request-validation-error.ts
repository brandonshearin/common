import { ValidationError } from 'express-validator'
import { CustomError } from './custom-error'

export class RequestValidationError extends CustomError {
    statusCode = 400
    // public errors: ValidationError[] is equivalent to:
    //
    // errors: ValidationError[]
    // constructor(errors: ValidationError[]){
    //    this.errors = errors
    // }
    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters')

        // Only do this when you are extending a class built into the langauge
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            return {
                message: err.msg,
                field: err.param
            }
        })
    }
}