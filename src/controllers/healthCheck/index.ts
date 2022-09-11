import { connectToDb } from '../../db';
import { NextFunction, Request, Response } from 'express';

export const serverHealthCheck = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await connectToDb();
        return res.status(200).json({
            message: 'OK!',
        });
    } catch (error) {
        return res.status(500).json({ message: 'notOk!' });
    }
};
