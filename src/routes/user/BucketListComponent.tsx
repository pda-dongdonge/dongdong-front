import React, { useEffect, useState } from "react";
import BucketItem, { Bucket } from "./BucketItem";
import useSWR from "swr";
import bucketlistAPI, { IBucketItem } from "@/apis/bucketlistAPI";
import { useParams } from "react-router-dom";
const { VITE_BASE_URL } = import.meta.env;

type Props = {
  tab: string;
};
export default function BucketListComponent({ tab }: Props) {
  const { userId } = useParams();
  const service = new bucketlistAPI(VITE_BASE_URL + "");
  const [cnt, setCnt] = useState(0);
  const {
    data: makerBucket,
    error: makerBError,
    isLoading: makerBIsLoading,
  } = useSWR(`/bucket/user/${userId}`, service.fetcher);

  const {
    data: likeBucket,
    error: likeBError,
    isLoading: likeBIsLoading,
  } = useSWR(`/userprofile/likebucket/${userId}`, service.fetcher);
  useEffect(() => {
    if (tab === "bucket" && makerBucket) {
      setCnt(makerBucket.data.length);
    }
    if (tab === "feed" && likeBucket) {
      setCnt(likeBucket.data.length);
    }
  }, [tab]);
  return (
    !likeBIsLoading &&
    !makerBIsLoading && (
      <div className="user-bucketList w-full  min-h-full  py-2 px-4">
        <div>
          <p className="text-dark-500 m-2 mb-3">{`${cnt}개의 바구니`}</p>
        </div>
        <div className="bucket grid grid-cols-2 gap-4">
          {makerBucket &&
            likeBucket &&
            (tab === "bucket"
              ? makerBucket.data.map((bucket: Bucket) => {
                  return (
                    <BucketItem key={bucket._id} bucket={bucket}></BucketItem>
                  );
                })
              : likeBucket.data.map((bucket: Bucket) => {
                  return (
                    <BucketItem key={bucket._id} bucket={bucket}></BucketItem>
                  );
                }))}
        </div>
      </div>
    )
  );
}
