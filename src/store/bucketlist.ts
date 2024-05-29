import { Schema, ObjectId } from "mongoose";

export interface Maker {
  _id: string;
  username: string;
}

export interface Bucket {
  _id: number;
  title: string;
  contents: string;
  maker: Maker;
}

// _id
// 665480115dca37c40e9d1fe4
// title
// "제목1입니다."
// contents
// "내용입니다."
// maker
// 6650173db177c1da1973a2e8

// bucketItemList
// Array (empty)

// likeUser
// Array (empty)
