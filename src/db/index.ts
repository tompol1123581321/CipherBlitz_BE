import { connect } from 'mongoose';

export const connectToDb = async () => {
    try {
        connect(
            'mongodb+srv://tpolivka1123581321:Trolol321@cipherblitzcluster.wbap4r3.mongodb.net/?retryWrites=true&w=majority',
            () => {
                console.log('connected to db');
            }
        );
    } catch (error) {
        console.log(error);
    }
};
