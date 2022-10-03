import { Schema, model } from 'mongoose';
import { GameType } from '../../types';

const coordinatesSchema = new Schema({
    cartesianCoordinates: {
        type: [Number],
    },
});

const gameSchema = new Schema<GameType>({
    title: String,
    createdAt: Date,
    modifiedAt: Date,
    author: String,
    isPublic: Boolean,
    startingGpsCoordinates: coordinatesSchema,
    stepsContent: [
        {
            type: String,
            title: String,
            message: String,
            key: String,
            coordinates: coordinatesSchema,
            answerType: String,
        },
    ],
});

export const Game = model<GameType>('game', gameSchema);
