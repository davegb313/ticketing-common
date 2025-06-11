import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';

export const validateRequest = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    console.log('errors: ', errors);
    
    if (!errors.isEmpty()) {
        console.log('Validation failed', errors.array());
        console.log('About to throw validation error');
        res.status(400).send({ err: errors})
        // throw new RequestValidationError(errors.array());
    }

    next();
}