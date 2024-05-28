import { Schema, ObjectId } from 'mongoose';

export interface Maker {
    _id: string;
    username: string;
}

export interface Bucket {
    _id:number;
    title: string;
    contents: string;
    maker:  Maker;
}
