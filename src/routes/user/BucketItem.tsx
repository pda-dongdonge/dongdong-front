import React from "react";
import ThumbnailGrid from "./ThumbnailGrid";
export interface BucketItem {
  _id: string;
  url: string;
  urlTitle: string;
  urlContent: string | null;
  imgUrl: string | null;
}
export interface Bucket {
  _id: string;
  title: string;
  content: string;
  maker: string;
  bucketItemList: BucketItem[];
  bucketCnt: number;
  likeUser: string[];
}
type Props = {
  bucket: Bucket;
};
export default function BucketItem({ bucket }: Props) {
  return (
    <div className="bucket-item">
      <div className="thumbnail-box">
        <ThumbnailGrid
          imageUrl={bucket.bucketItemList.map((el) => el.imgUrl || "")}
        />
      </div>
      <p className="title">{bucket.title}</p>
      <p className="item-cnt">{bucket.bucketCnt}개의 영상</p>
    </div>
  );
}
