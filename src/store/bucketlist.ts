import { Schema, ObjectId } from 'mongoose';

export interface Bucket {
    _id:number;
    title: string;
    contents: string;
    maker: string;
}
