import { connect, disconnect } from 'mongoose';

const uri = process.env.MONGODB_URI ?? '';

export const connectToDb = async () => {
    console.log('connecting');
    console.log(uri);
    try {
        connect(uri, () => {
            console.log('Connected to db');
        });
    } catch (error) {
        console.log(error);
    }
};

export const disconnectDb = async () => {
    console.log('Disconnected from db');
    disconnect();
};
