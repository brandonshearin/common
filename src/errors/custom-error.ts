

export abstract class CustomError extends Error {
    abstract statusCode: number // by writing out abstract right here, that says that a subclass must have this field

    constructor(message: string) {
        super(message)

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): {
        message: string
        field?: string
    }[]
}
