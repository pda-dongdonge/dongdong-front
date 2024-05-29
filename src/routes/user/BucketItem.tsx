import React from "react";
import ThumbnailGrid from "./ThumbnailGrid";
import InfoBottom from "../bucketDetail/components/infoBottom";
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
import { useNavigate } from "react-router-dom";

export default function BucketItem({ bucket }: Props) {
  const navigate = useNavigate();

  const goToPage = (bucketId: string) => {
    navigate(`/bucketlist/${bucketId}`);
  };

  return (
    <div className="bucket-item" onClick={() => goToPage(bucket._id)}>
      <div className="thumbnail-box">
        <ThumbnailGrid
          imageUrl={bucket.bucketItemList.map((el) => el.imgUrl || "")}
        />
      </div>
      <div className="item-info flex justify-between items-center">
        <p className="title pl-1 py-2 m-0">{bucket.title}</p>
        <div className="flex items-center justify-center gap-2">
          <InfoBottom />
        </div>
        {/* <p className="item-cnt">{bucket.bucketCnt}개의 영상</p> */}
      </div>
    </div>
  );
}
