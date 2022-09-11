// import { Request, Response } from 'express';

export const createGameController = (req: any, res: any) => {
    console.log('works', req.body);
    return res.status(200).json({ message: 'teasdst' });
};
