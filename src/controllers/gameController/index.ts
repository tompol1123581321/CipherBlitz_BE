import { Game } from '../../db';
import { Request, Response } from 'express';
import { GameType } from '../../types';

export const saveNewGame = async (req: Request<GameType>, res: Response) => {
    console.log('gotten here');
    try {
        const game = new Game(req.body);
        console.log(req.body);
        await game.save();
        return res.status(200).json({ message: 'new game saved!' });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
