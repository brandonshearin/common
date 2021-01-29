import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'
import { DatabaseConnectionError } from '../errors/database-connection-error'
import { RequestValidationError } from '../errors/request-validation-error'


export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (err instanceof CustomError) {
        return res.
            status(err.statusCode).
            send({ errors: err.serializeErrors() })
    }

    // this will be a catch-all if we get an error that isn't defined
    res.status(400).send({
        errors: [{
            message: "Something went wrong"
        }]
    })
}