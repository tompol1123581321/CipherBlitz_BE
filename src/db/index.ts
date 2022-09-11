import { connect } from 'mongoose';

const uri = process.env.MONGODB_URI ?? '';

export const connectToDb = async () => {
    try {
        connect(uri, () => {
            console.log('connected to db');
        });
    } catch (error) {
        console.log(error);
    }
};
