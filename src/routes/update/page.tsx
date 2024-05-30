/* eslint-disable @typescript-eslint/no-explicit-any */
import BucketNav from "../bucketlist/page";
//import {getBucketList} from "../../apis/bucketlistAPI";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "./BucketItem";
const { VITE_BASE_URL } = import.meta.env;
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import SkeletonContainer from "@/components/SkeletonContainer";
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
export default function UpdatePage() {
  const service = new bucketlistAPI(VITE_BASE_URL + "");
  const { data, isLoading } = useSWR<any>(
    "/bucket",
    service.fetcher.bind(service)
  );
  const navigate = useNavigate();

  const UserClick = (bucket: Bucket) => {
    console.log(bucket);
    navigate(`/bucketlist/${bucket._id}`);
  };
  if (isLoading)
    return (
      <>
        <BucketNav />
        <SkeletonContainer cnt={3} />;
      </>
    );
  return (
    <>
      <BucketNav />
      <div className="flex flex-wrap justify-center gap-8 max-w-[1440px]  px-2">
        {data.data.reverse().map((bucket: any) => (
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
