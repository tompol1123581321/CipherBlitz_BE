import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    title: String,
    createdAt: Date,
    modifiedAt: Date,
    author: String,
    isPublic: Boolean,
});

export const User = model('Users', userSchema);
