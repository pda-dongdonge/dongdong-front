/* eslint-disable @typescript-eslint/no-explicit-any */
import BucketNav from "../bucketlist/page";
import { useEffect, useState } from "react";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "../update/BucketItem";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Bucket } from "../user/BucketItem";
import useSWR from "swr";

const { VITE_BASE_URL } = import.meta.env;
const service = new bucketlistAPI(VITE_BASE_URL + "");

export default function LikePage() {
  const { user_id, user } = useAuth();
  const navigate = useNavigate();
  const { data, isLoading } = useSWR<any>(
    user._id ? `/bucket/feed/${user._id}` : null,
    service.fetcher.bind(service)
  );
  //내가 팔로우 한 것
  // useEffect(() => {
  //   if (user_id) {
  //     const fetchBucketData = async () => {
  //       try {
  //         const data = await service.getBucketListFollowing(user_id);
  //         setBucketList(data);
  //         //console.log(data)
  //       } catch (error) {
  //         console.error("Error fetching bucket data:", error);
  //       }
  //     };

  //     fetchBucketData();
  //   }
  // }, [user_id]);

  const UserClick = (bucket: Bucket) => {
    console.log(bucket);
    navigate(`/bucketlist/${bucket._id}`);
  };
  if (isLoading) return <div>loading</div>;
  return (
    <>
      <BucketNav />

      <div className="flex flex-wrap justify-between">
        {data &&
          data.data.map((bucket: any) => (
            <BucketItem
              key={bucket._id}
              bucket={bucket}
              handleClick={UserClick}
            />
          ))}
      </div>
    </>
  );
}
