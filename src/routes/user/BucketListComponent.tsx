import React, { useEffect, useState } from "react";
import BucketItem, { Bucket } from "./BucketItem";
import useSWR from "swr";
import bucketlistAPI from "@/apis/bucketlistAPI";
import { useParams } from "react-router-dom";
import SkeletonContainer from "@/components/SkeletonContainer";
const { VITE_BASE_URL } = import.meta.env;

type Props = {
  tab: string;
};
const service = new bucketlistAPI(VITE_BASE_URL + "");

export default function BucketListComponent({ tab }: Props) {
  const { userId } = useParams();

  const [cnt, setCnt] = useState(0);
  const {
    data: makerBucket,
    isLoading: makerBIsLoading,
    error: makerBucketError,
  } = useSWR(`/bucket/user/${userId}`, service.fetcher.bind(service));

  const {
    data: likeBucket,
    isLoading: likeBIsLoading,
    error: likeBucketError,
  } = useSWR(
    `/userprofile/likebucket/${userId}`,
    service.fetcher.bind(service)
  );
  useEffect(() => {
    if (tab === "bucket" && makerBucket) {
      setCnt(makerBucket.data.length);
    }
    if (tab === "feed" && likeBucket) {
      setCnt(likeBucket.data.length);
    }
  }, [tab, makerBucket, likeBucket]);

  // 로딩 상태 및 에러 처리
  if (makerBIsLoading && likeBIsLoading) return <SkeletonContainer />;
  if (makerBucketError && likeBucketError) return <div>Failed to load</div>;

  return (
    <div className="user-bucketList w-full  min-h-full  py-2 px-4 flex flex-col items-center">
      <div className="w-full max-w-[1440px]">
        <p className="text-dark-500 m-2 mb-3 text-left">{`${cnt}개의 바구니`}</p>
      </div>
      {cnt > 0 ? (
        <div className="bucket grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1440px] gap-4">
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
      ) : (
        <div>
          <img src="/tung.png" alt="" />
        </div>
      )}
    </div>
  );
}
