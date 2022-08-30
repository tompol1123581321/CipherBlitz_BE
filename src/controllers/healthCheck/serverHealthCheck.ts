import { NextFunction, Request, Response } from 'express';

export const serverHealthCheck = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return res.status(200).json({
        message: 'OK!',
    });
};
