// import React from 'react'
import { IBucketItem } from "@/apis/bucketlistAPI";
import BucketItem from "./bucketItem";

type BucketItemListProps = {
  bucketItemList: IBucketItem[];
};

export default function BucketItemList({bucketItemList}: BucketItemListProps) {
    console.log(bucketItemList);
  return (
    <div className="w-full max-w-[500px] shadow-lg bg-white min-h-[433px] rounded-[2rem] mb-6 p-[1rem]">
      {/* bucketItemList */}
      {bucketItemList.map((item)=>(
        <BucketItem key={item._id} bucketItem={item}/>
      ))}
    </div>
  );
}
